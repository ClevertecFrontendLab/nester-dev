import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IMainStoreInitialState {
    isAsideCollapsed: boolean;
}

const initialState: IMainStoreInitialState = {
    isAsideCollapsed: true,
};

const mainStoreSlice = createSlice({
    name: 'store',
    initialState,
    reducers: {
        toggleAside: (state, action: PayloadAction<boolean>) => {
            state.isAsideCollapsed = action.payload;
        },
    },
});

export default mainStoreSlice.reducer;

export const { toggleAside } = mainStoreSlice.actions;
