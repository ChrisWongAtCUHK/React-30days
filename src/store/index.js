import { createStore } from "redux";
import rootReducer from "../reducers";  // 後面沒指定檔案名，預設直接抓index.js

const store = createStore(rootReducer);
export default store;