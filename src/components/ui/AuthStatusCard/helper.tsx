import { AuthStatuses } from '@components/ui/AuthStatusCard/types.ts';
import { CheckCircleFilled, CloseCircleFilled, WarningFilled } from '@ant-design/icons';

export const getCardDataViaStatus = (status: AuthStatuses) => {
    switch (status) {
        case AuthStatuses.LOGIN_ERROR:
            return {
                icon: <WarningFilled style={{ color: 'var(--character-light-warning)' }} />,
                title: 'Вход не выполнен',
                description: 'Что-то пошло не так. Попробуйте еще раз',
            };

        case AuthStatuses.EMAIL_EXISTS:
            return {
                icon: <CloseCircleFilled style={{ color: 'var(--character-light-error)' }} />,
                title: 'Данные не сохранились',
                description:
                    'Такой e-mail уже записан в системе. Попробуйте зарегистрироваться по другому e-mail.',
            };

        case AuthStatuses.REGISTER_SUCCESS:
            return {
                icon: <CheckCircleFilled style={{ color: 'var(--character-light-success)' }} />,
                title: 'Регистрация успешна',
                description:
                    'Регистрация прошла успешно. Зайдите в приложение, используя свои e-mail и пароль.',
            };

        case AuthStatuses.REGISTER_ERROR:
            return {
                icon: <WarningFilled style={{ color: 'var(--character-light-warning)' }} />,
                title: 'Данные не сохранились',
                description:
                    'Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз.',
            };

        case AuthStatuses.PASSWORD_CHANGE_SUCCESS:
            return {
                icon: <CheckCircleFilled style={{ color: 'var(--character-light-success)' }} />,
                title: 'Пароль успешно изменен',
                description: 'Теперь можно войти в аккаунт, используя свой логин и новый пароль',
            };

        case AuthStatuses.PASSWORD_CHANGE_ERROR:
            return {
                icon: <WarningFilled style={{ color: 'var(--character-light-warning)' }} />,
                title: 'Данные не сохранились',
                description: 'Что-то пошло не так. Попробуйте ещё раз',
            };
    }
};
