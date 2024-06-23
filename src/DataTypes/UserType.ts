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

export interface UserData {
    username: string;
    name: string;
    email: string;
    id: number;
    profile_image: string;
    comments_count: number;
    posts_count: number;
}