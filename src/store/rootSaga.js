import { fork, all } from "redux-saga/effects";
import { watcher as testWatcher } from "./test";
// import { watcher as authWatcher } from "./auth";
import authWatcher from "./auth/sagas";
import dataWatcher from "./data/sagas";
import searchWatcher from "./search/sagas";
import homeWatcher from "./home/sagas";

export default function* () {
  yield all([
    fork(testWatcher),
    fork(authWatcher),
    fork(dataWatcher),
    fork(searchWatcher),
    fork(homeWatcher)
  ]);
}
