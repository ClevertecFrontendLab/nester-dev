import { FC } from 'react';
import { Rate } from 'antd';
import styles from './FeedbackCard.module.scss';
import { StarFilled, StarOutlined } from '@ant-design/icons';
import { IFeedback } from '@shared/feedback.interface.ts';
import { format } from 'date-fns';

const FeedbackInfo: FC<Omit<IFeedback, 'imageSrc' | 'fullName' | 'id'>> = ({
    createdAt,
    message,
    rating,
}) => {
    return (
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
                <span className={styles.date}>{format(createdAt, 'dd.MM.yyyy')}</span>
            </div>

            {message && <p className={styles.text}>{message}</p>}
        </div>
    );
};

export default FeedbackInfo;
