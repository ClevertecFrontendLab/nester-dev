import { FC } from 'react';
import { Layout } from 'antd';
import styles from './Aside.module.scss';
import Menu from '@components/ui/Menu/Menu.tsx';
import AsideToggle from '@components/layout/Aside/AsideToggle.tsx';
import { useAppSelector } from '@hooks/typed-react-redux-hooks.ts';

const Aside: FC = () => {
    const { isAsideCollapsed } = useAppSelector((state) => state.mainState);

    return (
        <div className={styles.aside}>
            <Layout.Sider collapsed={isAsideCollapsed} width={208} collapsedWidth={64}>
                <Menu />
            </Layout.Sider>
            <AsideToggle />
        </div>
    );
};

export default Aside;
