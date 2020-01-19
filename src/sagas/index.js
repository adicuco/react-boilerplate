import { all } from 'redux-saga/effects';

import test from 'sagas/test';

export default function* rootSaga() {
  yield all([test()]);
}
