import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import compareReducer from "../features/compare/services/compareSlice"

export const store = configureStore({
  reducer: {
    compare: compareReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
