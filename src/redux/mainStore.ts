import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReactNode } from 'react';

interface IMainStoreInitialState {
    isAsideCollapsed: boolean;
    token: string;
    showLoader: boolean;
    modal: ReactNode | null;
}

const initialState: IMainStoreInitialState = {
    isAsideCollapsed: true,
    token: '',
    showLoader: false,
    modal: null,
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

        setModal: (state, action: PayloadAction<ReactNode | null>) => {
            state.modal = action.payload;
        },
    },
});

export default mainStoreSlice.reducer;

export const { toggleAside, setToken, setShowLoader, setModal } = mainStoreSlice.actions;
