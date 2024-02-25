import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '@redux/configure-store.ts';
import { UrlConfig } from '@redux/api/helpers/url.config.ts';
import { HttpMethod } from '@redux/api/helpers/http-methods.ts';
import { IAuthDto, IAuthResponseDto } from '@redux/api/types.ts';
import { saveTokenToStorage } from '@redux/api/helpers/helper.ts';
import { setToken } from '@redux/mainStore.ts';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_API_URL}`,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).mainState.token;

            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }

            return headers;
        },
    }),
    endpoints: (builder) => ({
        register: builder.mutation<unknown, IAuthDto>({
            query: (body) => ({
                url: UrlConfig.REGISTER,
                method: HttpMethod.POST,
                body,
            }),
        }),

        login: builder.mutation<IAuthResponseDto, IAuthDto>({
            query: (body) => ({
                url: UrlConfig.LOGIN,
                method: HttpMethod.POST,
                body,
            }),

            async onQueryStarted(credentials, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled.then(({ data }) => {
                        dispatch(setToken(data.accessToken));

                        if (credentials.remember_me) {
                            saveTokenToStorage(data.accessToken);
                        }
                    });
                } catch (e) {
                    dispatch(setToken(''));
                }
            },
        }),
    }),
});

export const { useRegisterMutation, useLoginMutation } = api;
