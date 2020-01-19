import React from 'react';
import { Provider } from 'react-redux';

import configureStore from 'store/configureStore';
import rootSaga from 'sagas';

import Router from 'components/Router';
// import ErrorBoundary from 'components/ErrorBoundary';

const store = configureStore();
store.runSaga(rootSaga);

export default () => {
  return (
    // <ErrorBoundary>
    <Provider store={store}>
      <Router />
    </Provider>
    // </ErrorBoundary>
  );
};
