import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import MediaSlice from "./media-list/slice";

import { MediaInitialState } from "./types";

export interface RootState {
  mediaData: MediaInitialState;
}

const RootReducer = combineReducers({
  mediaData: MediaSlice,
});

const store = configureStore({ reducer: RootReducer });
const UseStoreDispatcher = (): StoreDispatcherTypes => store.dispatch;

export type StoreDispatcherTypes = typeof store.dispatch;
export { UseStoreDispatcher, RootReducer };
export const UseAppSelector = useSelector;
export default store;
