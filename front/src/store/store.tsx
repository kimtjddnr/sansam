import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./mainSlice";
import signup2Reducer from "./signup2Slice";
import recommenReducer from "./RecommendSlice";
import loginReducer from "./loginSlice";
import courseReducer from "./courseSlice";

// redux-persist
import sessionStorage from "redux-persist/es/storage/session";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

interface persistType {
  key: string;
  sessionStorage: any;
}

const persistConfig: persistType = {
  key: "root",
  sessionStorage,
  // whitelist: ['user']
};

const reducers = combineReducers({
  main: mainReducer,
  signup2: signup2Reducer,
  recommend: recommenReducer,
  login: loginReducer,
  course: courseReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: {
    main: mainReducer,
    signup2: signup2Reducer,
    recommend: recommenReducer,
    login: loginReducer,
    course: courseReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
