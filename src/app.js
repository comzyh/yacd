import 'modern-normalize/modern-normalize.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Root from './components/Root';

Modal.setAppElement('#app');

// use async React
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<Root />);

// const render = (Component, props = {}) => {
//   ReactDOM.render(<Component {...props} />, document.getElementById('app'));
// };
// render(Root, props);

// eslint-disable-next-line no-console
console.log('Checkout the repo: https://github.com/haishanh/yacd');
