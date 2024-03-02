import { FC } from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styles from './FeedbackCard.module.scss';

const FeedbackUser: FC = () => {
    return (
        <div className={styles.feedbackUser}>
            <Avatar
                size={42}
                icon={<UserOutlined style={{ color: 'var(--character-light-title-85)' }} />}
            />

            <span className={styles.name}>{'Вероника \\n Киверова'}</span>
        </div>
    );
};

export default FeedbackUser;
