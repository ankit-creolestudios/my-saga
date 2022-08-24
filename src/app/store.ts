import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./saga/rootSaga";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducers: {},
  middleware: (getDefaultMiddleware) => {
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware);
  },
});
sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type RootState = ReturnType<typeof store.getState>;

export default store;
