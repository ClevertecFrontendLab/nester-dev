import { api } from '@redux/api/api.ts';
import { UrlConfig } from '@redux/api/helpers/url.config.ts';
import { HttpMethod } from '@redux/api/helpers/http-methods.ts';
import { setShowLoader } from '@redux/mainStore.ts';
import { IFeedback } from '@shared/feedback.interface.ts';

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
        }),
    }),
});

export const { useGetFeedbacksQuery } = feedbackApi;
