import { FC, useState } from 'react';
import { Layout } from 'antd';
import Menu from '@components/ui/Menu/Menu.tsx';
import AsideToggle from '@components/layout/Aside/AsideToggle.tsx';
import { useMainStateSelector } from '@hooks/typed-react-redux-hooks.ts';

import styles from './Aside.module.scss';

const Aside: FC = () => {
    const { isAsideCollapsed } = useMainStateSelector();
    const [asideWidth, setAsideWidth] = useState({ full: 208, collapsed: 64 });

    const handleBreakPoint = (broken: boolean) => {
        if (broken) {
            setAsideWidth({ full: 106, collapsed: 0 });
        } else {
            setAsideWidth({ full: 208, collapsed: 64 });
        }
    };

    return (
        <div className={styles.aside}>
            <Layout.Sider
                collapsed={isAsideCollapsed}
                width={asideWidth.full}
                collapsedWidth={asideWidth.collapsed}
                breakpoint='md'
                onBreakpoint={handleBreakPoint}
                trigger={null}
            >
                <Menu />
            </Layout.Sider>
            <AsideToggle />
        </div>
    );
};

export default Aside;
