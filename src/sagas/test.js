import { put, takeLatest } from 'redux-saga/effects';

import { TEST_ACTION } from 'constants/actionTypes';

function* test() {
  try {
    yield put({
      type: TEST_ACTION.SUCCESS,
      payload: 'success',
    });
  } catch (err) {
    yield put({ type: TEST_ACTION.FAILURE, err });
    console.log(err);
  }
}

export default function* watchTest() {
  yield takeLatest(TEST_ACTION.REQUEST, test);
}
