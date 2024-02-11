import { FC } from 'react';
import styles from '../../layout/Aside/Aside.module.scss';
import cn from 'classnames';

import { ReactComponent as Clever } from '@assets/icons/Clever.svg';
import { ReactComponent as Fit } from '@assets/icons/fit.svg';
import { useAppSelector } from '@hooks/typed-react-redux-hooks.ts';

const Logo: FC = () => {
    const { isAsideCollapsed } = useAppSelector((state) => state.mainState);

    return (
        <div className={cn(styles.logo, isAsideCollapsed && styles.logo_collapsed)}>
            <Clever className={cn(isAsideCollapsed && styles.logo_hide)} />
            <Fit className={styles.logo_full} />
        </div>
    );
};

export default Logo;
