import { put, takeLatest } from "redux-saga/effects";
import * as action from "./actions";
import { FETCH_API_DATA } from "./types";
import axios from "axios";

export function* getData() {
  try {
    const result = yield axios.get("https://swapi.dev/api/people");
    console.log(result.data);
  } catch (err) {
    console.log(err);
  }
}

export default function* sagas() {
  yield takeLatest(FETCH_API_DATA, getData);
}