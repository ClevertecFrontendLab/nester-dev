import { FC } from 'react';
import { Menu as AntdMenu } from 'antd';
import { menuItems } from '@components/ui/Menu/config.tsx';
import Logo from '@components/ui/Logo/Logo.tsx';

import styles from './Menu.module.scss';
import { MenuKeys } from '@components/ui/Menu/types.ts';
import { MenuInfo } from 'rc-menu/lib/interface';
import { useLogout } from '@hooks/useLogout.ts';

const Menu: FC = () => {
    const logout = useLogout();
    const handleClick = ({ key }: MenuInfo) => {
        if (key === MenuKeys.logout) {
            logout();
        }
    };

    return (
        <div className={styles.menu}>
            <Logo />

            <AntdMenu mode='inline' items={menuItems} onClick={handleClick} />
        </div>
    );
};
export default Menu;
