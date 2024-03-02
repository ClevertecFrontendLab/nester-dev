import { FC } from 'react';
import FeedbackUser from '@components/ui/FeedbackCard/FeedbackUser.tsx';
import styles from './FeedbackCard.module.scss';
import FeedbackInfo from '@components/ui/FeedbackCard/FeedbackInfo.tsx';

const FeedbackCard: FC = () => {
    return (
        <div className={styles.card}>
            <FeedbackUser />

            <FeedbackInfo />
        </div>
    );
};

export default FeedbackCard;
