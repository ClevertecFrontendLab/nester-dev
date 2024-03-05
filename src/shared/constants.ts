export enum Paths {
    ROOT = '/',
    HOME = '/main',
    LOGIN = '/auth',
    REGISTRATION = '/auth/registration',
    AUTH_RESULT = '/result',
    CONFIRM_EMAIL = '/auth/confirm-email',
    CHANGE_PASSWORD = '/auth/change-password',
    CHANGE_PASSWORD_SUCCESS = '/result/success-change-password',
    CHANGE_PASSWORD_ERROR = '/result/error-change-password',
    FEEDBACKS = '/feedbacks',
}

export enum ModalTypes {
    SUCCESS = 'success',
    ERROR = 'error',
    INTERNAL_ERROR = 'internal-error',
    FEEDBACK = 'feedback',
}

export const PASSWORD_VALIDATION_PATTERN = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

export const DATE_FORMAT = 'dd.MM.yyyy';
