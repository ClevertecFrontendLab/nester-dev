import { CheckCircleFilled, CloseCircleFilled, WarningFilled } from '@ant-design/icons';
import { AuthStatuses } from '@shared/types.ts';
import { Paths } from '@shared/constants.ts';

export const getCardDataViaStatus = (status: AuthStatuses) => {
    switch (status) {
        case AuthStatuses.LOGIN_ERROR:
            return {
                icon: <WarningFilled style={{ color: 'var(--character-light-warning)' }} />,
                title: 'Вход не выполнен',
                description: 'Что-то пошло не так. Попробуйте еще раз',
                buttonText: 'Повторить',
                button_navigate: Paths.LOGIN,
            };

        case AuthStatuses.USER_EXISTS:
            return {
                icon: <CloseCircleFilled style={{ color: 'var(--character-light-error)' }} />,
                title: 'Данные не сохранились',
                description:
                    'Такой e-mail уже записан в системе. Попробуйте зарегистрироваться по другому e-mail.',
                buttonText: 'Назад к регистрации',
                button_navigate: Paths.REGISTRATION,
            };

        case AuthStatuses.REGISTER_SUCCESS:
            return {
                icon: <CheckCircleFilled style={{ color: 'var(--character-light-success)' }} />,
                title: 'Регистрация успешна',
                description:
                    'Регистрация прошла успешно. Зайдите в приложение, используя свои e-mail и пароль.',
                buttonText: 'Войти',
                button_navigate: Paths.LOGIN,
            };

        case AuthStatuses.REGISTER_ERROR:
            return {
                icon: <WarningFilled style={{ color: 'var(--character-light-warning)' }} />,
                title: 'Данные не сохранились',
                description:
                    'Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз.',
                buttonText: 'Повторить',
                button_navigate: Paths.REGISTRATION,
            };

        case AuthStatuses.PASSWORD_CHANGE_SUCCESS:
            return {
                icon: <CheckCircleFilled style={{ color: 'var(--character-light-success)' }} />,
                title: 'Пароль успешно изменен',
                description: 'Теперь можно войти в аккаунт, используя свой логин и новый пароль',
                buttonText: 'Вход',
                button_navigate: Paths.LOGIN,
            };

        case AuthStatuses.PASSWORD_CHANGE_ERROR:
            return {
                icon: <WarningFilled style={{ color: 'var(--character-light-warning)' }} />,
                title: 'Данные не сохранились',
                description: 'Что-то пошло не так. Попробуйте ещё раз',
                buttonText: 'Повторить',
                button_navigate: '',
            };
    }
};
