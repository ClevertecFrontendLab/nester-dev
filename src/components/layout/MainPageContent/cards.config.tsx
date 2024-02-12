import { CalendarTwoTone, HeartFilled } from '@ant-design/icons';
import { ReactComponent as Profile } from '@assets//icons/Profile.svg';

export const cards = [
    {
        title: 'Расписать тренировки',
        icon: <HeartFilled />,
        description: 'Тренировки',
    },

    {
        title: 'Назначить календарь',
        icon: (
            <CalendarTwoTone twoToneColor={['var(--primary-light-6)', 'var(--primary-light-6)']} />
        ),
        description: 'Календарь',
    },

    {
        title: 'Заполнить профиль',
        icon: <Profile />,
        description: 'Профиль',
    },
];
