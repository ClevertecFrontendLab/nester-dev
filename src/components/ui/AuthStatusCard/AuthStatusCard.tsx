import { FC } from 'react';
import { getCardDataViaStatus } from '@components/ui/AuthStatusCard/helper.tsx';
import { AuthStatuses } from '@shared/types.ts';

import styles from './AuthStatusCard.module.scss';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

interface Props {
    status: AuthStatuses;
}

const AuthStatusCard: FC<Props> = ({ status }) => {
    const { icon, title, description, button_navigate, buttonText } = getCardDataViaStatus(status);
    const navigate = useNavigate();

    const handleNavigate = () => {
        if (button_navigate) {
            navigate(button_navigate, { replace: true });
        }
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.icon}>{icon}</div>
            <div>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
            </div>

            <Button type='primary' size='large' block onClick={handleNavigate}>
                {buttonText}
            </Button>
        </div>
    );
};

export default AuthStatusCard;
