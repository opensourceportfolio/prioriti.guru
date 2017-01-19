import React from 'lib/react';
import { connect } from 'lib/react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import ShellPage from 'component/page/shell';
import AllPage from 'component/page/all';
import EditPage from 'component/page/edit';
import ViewPage from 'component/page/view';

const App = () =>
  <Router history={browserHistory}>
    <Route path="/" component={ShellPage}>
      <IndexRoute component={AllPage} />
      <Route path="edit" component={EditPage} />
      <Route path="edit/:id" component={EditPage} />
      <Route path="view/:type" component={ViewPage} />
      <Route path="*" component={AllPage} />
    </Route>
  </Router>;

export default connect()(App);
