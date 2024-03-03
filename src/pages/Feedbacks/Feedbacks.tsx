import { FC } from 'react';
import { FeedbacksList, NoFeedbacksPlaceholder } from '@components/index.ts';
import { useGetFeedbacks } from '@hooks/useGetFeedbacks.tsx';

import styles from './Feedbacks.module.scss';

const Feedbacks: FC = () => {
    const { data } = useGetFeedbacks();

    return (
        <div className={styles.wrapper}>
            {data?.length ? <FeedbacksList feedbacks={data} /> : <NoFeedbacksPlaceholder />}
        </div>
    );
};

export default Feedbacks;
