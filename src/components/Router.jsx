import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import QueryString from 'query-string';
import { ThemeProvider } from 'styled-components';
import { useLocalStorage } from '@rehooks/local-storage';

import { updateRouterState } from 'actions/router';

import GlobalStyles from 'constants/GlobalStyles';
import themes, { THEME_LIGHT } from 'constants/theme';
import constants from 'constants';

import Header from 'components/Header';

import HomePage from 'routes/HomePage';
import Register from 'routes/Register';
import Login from 'routes/Login';

const history = createBrowserHistory();

const AppRouter = ({ updateRouter }) => {
  const { location } = history;
  const [theme] = useLocalStorage(constants.THEME_KEY);

  useEffect(() => {
    const decodedSearch = decodeURIComponent(location.search);
    const stringCutBeforeSlash = decodedSearch.substr(
      0,
      decodedSearch.indexOf('/') !== -1
        ? decodedSearch.indexOf('/')
        : decodedSearch.length
    );
    const queryStrings = QueryString.parse(stringCutBeforeSlash);

    updateRouter({
      pathname: location.pathname,
      params: queryStrings,
    });
  }, [location]);

  return (
    <ThemeProvider theme={themes[theme] || themes[THEME_LIGHT]}>
      <GlobalStyles />
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

AppRouter.propTypes = {
  updateRouter: PropTypes.func.isRequired,
};

export default connect(
  null,
  { updateRouter: updateRouterState }
)(AppRouter);
