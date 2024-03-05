import { FC } from 'react';
import { Button } from 'antd';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks.ts';
import { setModal } from '@redux/mainStore.ts';

import styles from './FeedbacksList.module.scss';
import { ModalTypes } from '@shared/constants.ts';

interface Props {
    isUnfolded: boolean;
    unfoldFeedbacks: () => void;
}

const FeedbacksListActions: FC<Props> = ({ unfoldFeedbacks, isUnfolded }) => {
    const dispatch = useAppDispatch();
    const buttonText = isUnfolded ? 'Свернуть все отзывы' : 'Развернуть все отзывы';

    return (
        <div className={styles.actions}>
            <Button
                data-test-id='write-review'
                type='primary'
                size='large'
                onClick={() => dispatch(setModal(ModalTypes.FEEDBACK))}
            >
                Написать отзыв
            </Button>
            <Button
                data-test-id='all-reviews-button'
                type='text'
                size='large'
                onClick={unfoldFeedbacks}
            >
                {buttonText}
            </Button>
        </div>
    );
};

export default FeedbacksListActions;
