export declare type None = null | undefined;
export declare type Nullable<T> = T | None;
export interface User {
    login: string;
    "avatar_url": string;
    url: string;
    name: Nullable<string>;
    company: Nullable<string>;
    blog: string;
    location: Nullable<string>;
    bio: Nullable<string>;
    "twitter_username": Nullable<string>;
    "public_repos": number;
    followers: number;
    following: number;
    "created_at": number;
}
