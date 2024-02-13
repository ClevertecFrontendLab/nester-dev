import { FC } from 'react';
import cn from 'classnames';

import { ReactComponent as Clever } from '@assets/icons/Clever.svg';
import { ReactComponent as Fit } from '@assets/icons/fit.svg';
import { useAppSelector } from '@hooks/typed-react-redux-hooks.ts';

import styles from '../../layout/Aside/Aside.module.scss';

const Logo: FC = () => {
    const { isAsideCollapsed } = useAppSelector((state) => state.mainState);

    return (
        <div className={cn(styles.logo, isAsideCollapsed && styles.logo_collapsed)}>
            <span className={styles.logo_inner}>
                <Clever className={cn(styles.logo_clever, isAsideCollapsed && styles.logo_hide)} />
                <Fit className={styles.logo_full} />
            </span>
        </div>
    );
};

export default Logo;
