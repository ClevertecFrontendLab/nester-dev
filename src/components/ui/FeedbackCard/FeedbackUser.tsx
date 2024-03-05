import { FC } from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styles from './FeedbackCard.module.scss';
import { IFeedback } from '@shared/feedback.interface.ts';

const FeedbackUser: FC<Pick<IFeedback, 'fullName' | 'imageSrc'>> = ({ fullName, imageSrc }) => {
    return (
        <div className={styles.feedbackUser}>
            <Avatar
                src={imageSrc}
                alt={`${fullName} avatar`}
                size={42}
                icon={<UserOutlined style={{ color: 'var(--character-light-title-85)' }} />}
            />

            <span className={styles.name}>{fullName?.replace(' ', '\n')}</span>
        </div>
    );
};

export default FeedbackUser;
