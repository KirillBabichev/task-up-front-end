export type TAuthForm = {
    email: string;
    password: string;
}

export type TUser = {
    id: string;
    name?: string;
    email: string;

    workInterval?: number;
    breakInterval?: number;
    intervalsCount?: number;
}

export type TAuthResponse = {
    accessToken: string;
    user: TUser;
}

export type TUserForm = Omit<TUser, 'id'> & { password?: string }
