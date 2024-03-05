import { useLeaveFeedbackMutation } from '@redux/api/feedback.api.ts';
import { useEffect } from 'react';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks.ts';
import { setFeedback, setModal, setRating } from '@redux/mainStore.ts';
import { ModalTypes } from '@shared/constants.ts';

export const useLeaveFeedback = () => {
    const [mutate, { isSuccess, isError, originalArgs }] = useLeaveFeedbackMutation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (isSuccess) {
            dispatch(setModal(ModalTypes.SUCCESS));
        }

        if (isError) {
            dispatch(setModal(ModalTypes.ERROR));

            dispatch(setRating(originalArgs?.rating || 0));
            dispatch(setFeedback(originalArgs?.message || ''));
        }
    }, [isSuccess, isError]);

    return { mutate };
};
