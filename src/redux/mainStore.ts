import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IMainStoreInitialState {
    isAsideCollapsed: boolean;
    token: string;
}

const initialState: IMainStoreInitialState = {
    isAsideCollapsed: true,
    token: '',
};

const mainStoreSlice = createSlice({
    name: 'mainStore',
    initialState,
    reducers: {
        toggleAside: (state, action: PayloadAction<boolean>) => {
            state.isAsideCollapsed = action.payload;
        },

        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
    },
});

export default mainStoreSlice.reducer;

export const { toggleAside, setToken } = mainStoreSlice.actions;
