import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sessionStorage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import courseSlice from "./courseSlice";
import loginSlice from "./loginSlice";
import mainSlice from "./mainSlice";
import RecommendSlice from "./RecommendSlice";

const reducers = combineReducers({
  course: courseSlice,
  //   login: loginSlice,
  //   main: mainSlice,
  //   recommendSlice: RecommendSlice,
});

const persistConfig = {
  key: "root",
  storage: sessionStorage,
  whitelist: ["course"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const index = configureStore({
  reducer: persistedReducer,
});

export default index;
