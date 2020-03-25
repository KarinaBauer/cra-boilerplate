import React from 'react';
import Loadable from 'react-loadable';
import { BrowserRouter, Route, Switch }
  from 'react-router-dom';
import { Layout, HomePage, ErrorPage }
  from '~/containers/*';
import { Progress } from '~/components/*';

const AsyncPersonalPage = Loadable({
  loader: () => import('./containers/PersonalPage'),
  loading: Progress
});

export default () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/members/:id" component={AsyncPersonalPage} />
          <Route component={ErrorPage} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};
