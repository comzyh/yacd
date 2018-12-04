import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../ducks';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function configureStore() {
  console.log('configureStore store', store);
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunkMiddleware))
  );
  console.log('configureStore store', store);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../ducks', () => {
      const nextRootReducer = require('../ducks').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

const store = configureStore();
console.log('store', store);

export { store };
