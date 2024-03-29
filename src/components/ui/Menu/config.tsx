import { CalendarTwoTone, HeartFilled, IdcardOutlined, TrophyFilled } from '@ant-design/icons';
import { ReactComponent as Exit } from '@assets/icons/Exit.svg';
import { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

export const menuItems: MenuProps['items'] = [
    getItem(
        'Календарь',
        'calendar',
        <CalendarTwoTone
            style={{ fontSize: 16 }}
            twoToneColor={['var(--primary-light-9)', 'var(--primary-light-9)']}
        />,
    ),

    getItem('Тренировки', 'workouts', <HeartFilled style={{ fontSize: 16 }} />),

    getItem('Достижения', 'achievements', <TrophyFilled style={{ fontSize: 16 }} />),

    getItem('Профиль', 'profile', <IdcardOutlined style={{ fontSize: 16 }} />),

    getItem('Выход', 'logout', <Exit style={{ fontSize: 16 }} />),
];
