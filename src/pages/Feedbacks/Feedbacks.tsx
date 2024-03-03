import { FC } from 'react';
import { FeedbacksList, NoFeedbacksPlaceholder } from '@components/index.ts';
import styles from './Feedbacks.module.scss';
import { useGetFeedbacksQuery } from '@redux/api/feedback.api.ts';
import { Modal } from 'antd';

const Feedbacks: FC = () => {
    const { data, isError } = useGetFeedbacksQuery();

    if (isError) {
        return <Modal></Modal>;
    }

    return (
        <div className={styles.wrapper}>
            {data?.length ? <FeedbacksList feedbacks={data} /> : <NoFeedbacksPlaceholder />}
        </div>
    );
};

export default Feedbacks;
