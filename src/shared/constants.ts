export enum Paths {
    HOME = '/main',
    LOGIN = '/auth',
    REGISTRATION = '/auth/registration',
    AUTH_RESULT = '/result',
}

export const PASSWORD_VALIDATION_PATTERN = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
