import { FC } from 'react';
import styles from './Aside.module.scss';
import { MenuFoldOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks.ts';
import { toggleAside } from '@redux/mainStore.ts';
import useMediaQuery from '@hooks/useMediaQuery.ts';

const AsideToggle: FC = () => {
    const isMobile = useMediaQuery('(max-width: 480px)');
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
            data-test-id={isMobile ? 'sider-switch-mobile' : 'sider-switch'}
        >
            <MenuFoldOutlined />
        </button>
    );
};

export default AsideToggle;
