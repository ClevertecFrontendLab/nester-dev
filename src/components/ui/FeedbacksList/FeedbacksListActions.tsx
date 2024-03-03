import { FC } from 'react';
import { Button } from 'antd';

import styles from './FeedbacksList.module.scss';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks.ts';
import { setModal } from '@redux/mainStore.ts';
import { FeedbackModal } from '@components/index.ts';

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
                type='primary'
                size='large'
                onClick={() => dispatch(setModal(<FeedbackModal />))}
            >
                Написать отзыв
            </Button>
            <Button type='text' size='large' onClick={unfoldFeedbacks}>
                {buttonText}
            </Button>
        </div>
    );
};

export default FeedbacksListActions;
