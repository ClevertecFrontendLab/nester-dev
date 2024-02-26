import { api } from '@redux/api/api.ts';
import {
    IAuthDto,
    IChangePasswordDto,
    IConfirmEmailDto,
    IVerifyEmailResponseDto,
} from '@redux/api/types.ts';
import { UrlConfig } from '@redux/api/helpers/url.config.ts';
import { HttpMethod } from '@redux/api/helpers/http-methods.ts';
import { setShowLoader } from '@redux/mainStore.ts';

export const passwordRecoveryApi = api.injectEndpoints({
    endpoints: (builder) => ({
        checkEmail: builder.mutation<IVerifyEmailResponseDto, Pick<IAuthDto, 'email'>>({
            query: (body) => ({
                url: UrlConfig.CHECK_EMAIL,
                method: HttpMethod.POST,
                body,
            }),
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                try {
                    dispatch(setShowLoader(true));
                    await queryFulfilled;
                } catch (e) {
                    console.log(e);
                } finally {
                    dispatch(setShowLoader(false));
                }
            },
        }),

        confirmEmail: builder.mutation<IVerifyEmailResponseDto, IConfirmEmailDto>({
            query: (body) => ({
                url: UrlConfig.CONFIRM_EMAIL,
                method: HttpMethod.POST,
                credentials: 'include',
                body,
            }),
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                try {
                    dispatch(setShowLoader(true));
                    await queryFulfilled;
                } catch (e) {
                    console.log(e);
                } finally {
                    dispatch(setShowLoader(false));
                }
            },
        }),

        changePassword: builder.mutation<unknown, IChangePasswordDto>({
            query: (body) => ({
                url: UrlConfig.CHANGE_PASSWORD,
                method: HttpMethod.POST,
                credentials: 'include',
                body,
            }),
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                try {
                    dispatch(setShowLoader(true));
                    await queryFulfilled;
                } catch (e) {
                    console.log(e);
                } finally {
                    dispatch(setShowLoader(false));
                }
            },
        }),
    }),
});

export const { useCheckEmailMutation, useConfirmEmailMutation, useChangePasswordMutation } =
    passwordRecoveryApi;
