import { FC, useEffect, useMemo, useState } from 'react';
import { IFeedback } from '@shared/feedback.interface.ts';
import { FeedbackCard } from '@components/index.ts';

import styles from './FeedbacksList.module.scss';
import FeedbacksListActions from '@components/ui/FeedbacksList/FeedbacksListActions.tsx';

interface Props {
    feedbacks: IFeedback[];
}

const FeedbacksList: FC<Props> = ({ feedbacks }) => {
    const getFoldedFeedbacks = useMemo(() => {
        return feedbacks.slice(-4);
    }, [feedbacks]);

    const [unfoldFeedbacks, setUnfoldFeedbacks] = useState(false);
    const [data, setData] = useState(getFoldedFeedbacks);

    const handleUnfold = () => {
        setUnfoldFeedbacks((prev) => !prev);
    };

    useEffect(() => {
        if (unfoldFeedbacks) {
            setData(feedbacks);
        } else {
            setData(getFoldedFeedbacks);
        }
    }, [unfoldFeedbacks, feedbacks, getFoldedFeedbacks]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.list}>
                {data.map((item) => (
                    <FeedbackCard key={item.id} {...item} />
                ))}
            </div>

            <FeedbacksListActions isUnfolded={unfoldFeedbacks} unfoldFeedbacks={handleUnfold} />
        </div>
    );
};

export default FeedbacksList;
