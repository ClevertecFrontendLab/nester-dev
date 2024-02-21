import { FC, PropsWithChildren } from 'react';
import { AuthStatuses } from '@components/ui/AuthStatusCard/types.ts';
import { getCardDataViaStatus } from '@components/ui/AuthStatusCard/helper.tsx';

import styles from './AuthStatusCard.module.scss';

interface Props extends PropsWithChildren {
    status: AuthStatuses;
}

const AuthStatusCard: FC<Props> = ({ status, children }) => {
    const { icon, title, description } = getCardDataViaStatus(status);

    return (
        <div className={styles.wrapper}>
            <div className={styles.icon}>{icon}</div>
            <div>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
            </div>
            {children}
        </div>
    );
};

export default AuthStatusCard;
