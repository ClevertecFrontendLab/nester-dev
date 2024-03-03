import { api } from '@redux/api/api.ts';
import { UrlConfig } from '@redux/api/helpers/url.config.ts';
import { HttpMethod } from '@redux/api/helpers/http-methods.ts';
import { setShowLoader } from '@redux/mainStore.ts';
import { IFeedback } from '@shared/feedback.interface.ts';
import { ILeaveFeedbackDto } from '@redux/api/types.ts';

export const feedbackApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getFeedbacks: builder.query<IFeedback[], void>({
            query: () => ({
                url: UrlConfig.FEEDBACK,
                method: HttpMethod.GET,
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
            providesTags: () => [{ type: 'Feedbacks' }],
        }),

        leaveFeedback: builder.mutation<void, ILeaveFeedbackDto>({
            query: (body) => ({
                url: UrlConfig.FEEDBACK,
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
            invalidatesTags: () => [{ type: 'Feedbacks' }],
        }),
    }),
});

export const { useGetFeedbacksQuery, useLeaveFeedbackMutation } = feedbackApi;
