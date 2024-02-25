import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IMainStoreInitialState {
    isAsideCollapsed: boolean;
    token: string;
    showLoader: boolean;
}

const initialState: IMainStoreInitialState = {
    isAsideCollapsed: true,
    token: '',
    showLoader: false,
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

        setShowLoader: (state, action: PayloadAction<boolean>) => {
            state.showLoader = action.payload;
        },
    },
});

export default mainStoreSlice.reducer;

export const { toggleAside, setToken, setShowLoader } = mainStoreSlice.actions;
