import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReactNode } from 'react';

interface IMainStoreInitialState {
    isAsideCollapsed: boolean;
    token: string;
    showLoader: boolean;
    modal: ReactNode | null;
    rating: number;
    feedback: string;
}

const initialState: IMainStoreInitialState = {
    isAsideCollapsed: true,
    token: '',
    showLoader: false,
    modal: null,
    rating: 0,
    feedback: '',
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
        setRating: (state, action: PayloadAction<number>) => {
            state.rating = action.payload;
        },
        setFeedback: (state, action: PayloadAction<string>) => {
            state.feedback = action.payload;
        },
    },
});

export default mainStoreSlice.reducer;

export const { toggleAside, setToken, setShowLoader, setModal, setRating, setFeedback } =
    mainStoreSlice.actions;
