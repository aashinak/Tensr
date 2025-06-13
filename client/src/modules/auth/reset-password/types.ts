
export interface IResetPasswordInput {
  password: string;
  token: string;
  email: string;
}

export interface IResetPasswordFormInput {
  password: string;
  confirmPassword: string;
}
