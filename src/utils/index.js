/* eslint-disable */
import {
  localStorageGetItem,
  localStorageSetItem,
} from 'utils/storage';

function parseLocalStorage(key) {
  let result;
  try {
    result = JSON.parse(localStorageGetItem(key));
  } catch (err) {
    result = null;
  }
  return result;
}

export default {
  splitNumber(number) {
    return number.toString().split('.');
  },
};
