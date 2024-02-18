import { FC } from 'react';
import { Grid } from 'antd';
import { MenuFoldOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks.ts';
import { toggleAside } from '@redux/mainStore.ts';

import styles from './Aside.module.scss';

const { useBreakpoint } = Grid;

const AsideToggle: FC = () => {
    const { xs } = useBreakpoint();
    const { isAsideCollapsed } = useAppSelector((state) => state.mainState);
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(toggleAside(!isAsideCollapsed));
    };

    return (
        <button
            type='button'
            onClick={handleClick}
            className={styles.toggle}
            data-test-id={xs ? 'sider-switch-mobile' : 'sider-switch'}
        >
            <MenuFoldOutlined />
        </button>
    );
};

export default AsideToggle;
