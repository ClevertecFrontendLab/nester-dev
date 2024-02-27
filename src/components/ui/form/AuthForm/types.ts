export interface IAuthFormFields {
    login_email: string;
    login_password: string;
    register_email: string;
    register_password: string;
    register_confirm: string;
    remember_me: boolean;
}

export type IPasswordReset = Pick<IAuthFormFields, 'register_password' | 'register_confirm'>;
