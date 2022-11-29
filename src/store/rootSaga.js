import { fork, all } from "redux-saga/effects";
import { watcher as testWatcher } from "./test";
// import { watcher as authWatcher } from "./auth";
import authWatcher from "./auth/sagas";

export default function* () {
  yield all([fork(testWatcher), fork(authWatcher)]);
}
