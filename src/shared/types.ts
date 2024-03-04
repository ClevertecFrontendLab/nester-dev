export enum AuthStatuses {
    LOGIN_ERROR = '/result/error-login',
    REGISTER_SUCCESS = '/result/success',
    REGISTER_ERROR = '/result/error',
    USER_EXISTS = '/result/error-user-exist',
    PASSWORD_CHANGE_SUCCESS = '/result/success-change-password',
    EMAIL_CHANGE_ERROR = '/result/error-check-email',
    ERROR_CHECK_EMAIL_NO_EXIST = '/result/error-check-email-no-exist',
    CONFIRM_EMAIL = '/auth/confirm-email',
    PASSWORD_CHANGE = '/auth/change-password',
    PASSWORD_CHANGE_ERROR = '/result/error-change-password',
}

export type Nullable<T> = T | null;
