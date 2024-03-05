export interface IAuthDto {
    email: string;
    password: string;
    remember_me?: boolean;
}

export interface IAuthResponseDto {
    accessToken: string;
}

export interface IVerifyEmailResponseDto {
    email: string;
    message: string;
}

export interface IConfirmEmailDto {
    email: string;
    code: string;
}

export interface IChangePasswordDto {
    password: string;
    confirmPassword: string;
}

export interface ILeaveFeedbackDto {
    message: string;
    rating: number;
}
