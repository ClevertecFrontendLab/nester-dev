export interface IAuthDto {
    email: string;
    password: string;
    remember_me?: boolean;
}

export interface IAuthResponseDto {
    accessToken: string;
}
