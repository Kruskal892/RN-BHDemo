import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import userReducer from "./redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootSaga from "./sagaExport";

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  userReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  middleware: [thunk, sagaMiddleware],

  reducer: {
    user: persistedReducer,
  },
});
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);

export default store;
