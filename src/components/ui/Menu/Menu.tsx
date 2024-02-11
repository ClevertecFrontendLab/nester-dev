import { FC } from 'react';
import { Menu as AntdMenu } from 'antd';
import { menuItems } from '@components/ui/Menu/config.tsx';
import styles from './Menu.module.scss';
import Logo from '@components/ui/Logo/Logo.tsx';

const Menu: FC = () => {
    return (
        <div className={styles.menu}>
            <Logo />

            <AntdMenu mode='inline' items={menuItems} />
        </div>
    );
};

export default Menu;
