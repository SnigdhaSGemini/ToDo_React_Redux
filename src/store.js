import rootRed from "./reducers";
import { createStore } from "redux";

const store = createStore(rootRed, window.__REDUX_DEVTOOLS_EXTENSION && window.__REDUX_DEVTOOLS_EXTENSION());

export default store;