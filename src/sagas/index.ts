import { fork } from 'redux-saga/effects';
import getCharactersWatcher from 'sagas/character';

export default function* rootSaga() {
  yield fork(getCharactersWatcher);
}
