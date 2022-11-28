import { fork, all } from "redux-saga/effects";
import { watcher as testWatcher } from "./test";

export default function* () {
  yield all([fork(testWatcher)]);
}
