import { FC } from 'react';
import FeedbackUser from '@components/ui/FeedbackCard/FeedbackUser.tsx';
import styles from './FeedbackCard.module.scss';
import FeedbackInfo from '@components/ui/FeedbackCard/FeedbackInfo.tsx';
import { IFeedback } from '@shared/feedback.interface.ts';

const FeedbackCard: FC<IFeedback> = ({ fullName, imageSrc, rating, message, createdAt }) => (
    <div className={styles.card}>
        <FeedbackUser fullName={fullName} imageSrc={imageSrc} />

        <FeedbackInfo rating={rating} message={message} createdAt={createdAt} />
    </div>
);

export default FeedbackCard;
