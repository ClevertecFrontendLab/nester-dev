import { FC } from 'react';
import { Rate } from 'antd';
import styles from './FeedbackCard.module.scss';
import { StarFilled, StarOutlined } from '@ant-design/icons';
import { IFeedback } from '@shared/feedback.interface.ts';
import { format } from 'date-fns';
import { DATE_FORMAT } from '@shared/constants.ts';

const FeedbackInfo: FC<Omit<IFeedback, 'imageSrc' | 'fullName' | 'id'>> = ({
    createdAt,
    message,
    rating,
}) => (
    <div className={styles.info}>
        <div>
            <Rate
                disabled
                character={({ index }) => {
                    if (Number(index) < rating) {
                        return <StarFilled />;
                    }
                    return <StarOutlined style={{ color: 'var(--character-light-warning)' }} />;
                }}
                value={rating}
            />
            <span className={styles.date}>{format(createdAt, DATE_FORMAT)}</span>
        </div>

        {message && <p className={styles.text}>{message}</p>}
    </div>
);

export default FeedbackInfo;
