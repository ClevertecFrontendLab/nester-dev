import { FC } from 'react';
import { Typography } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { Paths } from '@shared/constants.ts';
import cn from 'classnames';

import styles from './Breadcrumbs.module.scss';

const Breadcrumbs: FC = () => {
    const { pathname } = useLocation();

    const getBreadcrumbText = (location: string) => {
        switch (location) {
            case Paths.FEEDBACKS:
                return 'Отзывы пользователей';
        }
    };

    return (
        <div className={cn(styles.breadcrumbs, pathname !== Paths.HOME && styles.breadcrumbs_from)}>
            <Link to={Paths.HOME}>
                <Typography.Text>Главная</Typography.Text>
            </Link>

            {pathname !== Paths.HOME && (
                <>
                    <span className={styles.divider}>/</span>

                    <span>{getBreadcrumbText(pathname)}</span>
                </>
            )}
        </div>
    );
};

export default Breadcrumbs;
