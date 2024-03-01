import { FC } from 'react';
import { NoFeedbacksPlaceholder } from '@components/index.ts';
import styles from './Feedbacks.module.scss';

const Feedbacks: FC = () => {
    return (
        <div className={styles.wrapper}>
            <NoFeedbacksPlaceholder />
        </div>
    );
};

export default Feedbacks;
