import { useGetFeedbacksQuery } from '@redux/api/feedback.api.ts';
import { useEffect } from 'react';
import { setModal } from '@redux/mainStore.ts';
import { ModalTypes } from '@shared/constants.ts';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks.ts';

export const useGetFeedbacks = () => {
    const { data, isError } = useGetFeedbacksQuery();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (isError) {
            dispatch(setModal(ModalTypes.INTERNAL_ERROR));
        }
    }, [isError, dispatch]);

    return { data };
};
