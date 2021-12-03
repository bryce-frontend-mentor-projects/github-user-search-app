import { Nullable } from '../types';
interface User {
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
export declare function fetcher<JSON = any>(input: RequestInfo, init?: RequestInit): Promise<JSON>;
export declare const useGithub: (user: string) => {
    user: User | undefined;
    isLoading: boolean;
    error: any;
};
export {};
