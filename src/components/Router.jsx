import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import QueryString from 'query-string';

import { updateRouterState } from 'actions/router';

import HomePage from 'routes/HomePage';

const history = createBrowserHistory();

const AppRouter = props => {
  const { location } = history;

  useEffect(() => {
    const decodedSearch = decodeURIComponent(location.search);
    const stringCutBeforeSlash = decodedSearch.substr(
      0,
      decodedSearch.indexOf('/') !== -1
        ? decodedSearch.indexOf('/')
        : decodedSearch.length
    );
    const queryStrings = QueryString.parse(stringCutBeforeSlash);

    props.updateRouterState({
      pathname: location.pathname,
      params: queryStrings,
    });
  }, [location]);

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Router>
  );
};

AppRouter.propTypes = {
  updateRouterState: PropTypes.func.isRequired,
};

export default connect(
  null,
  { updateRouterState }
)(AppRouter);
