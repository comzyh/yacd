import React, { Suspense } from 'react';

import ContentHeader from 'c/ContentHeader';
import TrafficChart from 'c/TrafficChart';
import TrafficNow from 'c/TrafficNow';
import Loading from 'c/Loading';
import s0 from 'c/Home.module.scss';

export default function Home() {
  return (
    <div>
      <ContentHeader title="Overview" />
      <div className={s0.root}>
        <div>
          <TrafficNow />
        </div>
        <div className={s0.chart}>
          <Suspense fallback={<Loading height="200px" />} maxDuration={10}>
            <TrafficChart />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
