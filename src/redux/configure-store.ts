import { configureStore } from '@reduxjs/toolkit';
import mainStoreSlice from './mainStore';

export const store = configureStore({
    reducer: {
        mainState: mainStoreSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
