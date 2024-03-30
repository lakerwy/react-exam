import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import roleReducer from './slice/role'


export const store = configureStore({
  reducer: {
    role2: roleReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;
