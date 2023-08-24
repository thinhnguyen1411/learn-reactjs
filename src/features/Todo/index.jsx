import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import NotFound from '../../components/NotFound';
TodoFeature.propTypes = {};

function TodoFeature(props) {
  const match = useRouteMatch();
  return (
    <div>
      TODO SHARED UI
      <Switch>
        <Route path={match.path} component={ListPage} exact />
        <Route path={`${match.path}/:todoId`} component={DetailPage} exact />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default TodoFeature;
