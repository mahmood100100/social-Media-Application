export interface UserSignUpValues {
    name: string;
    email: string;
    username: string;
    password: string;
    confirmpass: string;
    image: File | null;
}

export interface UserSignInValues {
    username: string;
    password: string;
}

