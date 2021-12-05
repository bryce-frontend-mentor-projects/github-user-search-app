import { Nullable } from '../types';
/**
 * Typescript User object
 */
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
/**
 * Helper function to execute the actual API function
 */
export declare function fetcher<JSON = any>(input: RequestInfo, init?: RequestInit): Promise<JSON>;
/**
 * This is where the magic happens. It uses 'SWR' to handle state while fetching information.
 *
 * Since this library is primarily used for keeping data from being stale, it would periodically refetch the data.
 * This was overkill for this project, so I specified that it should not retry on error, nor should it revalidate when
 * gaining focus. Probably didn't need to use this library, but wanted to try it out...
 *
 * @param user username to lookup
 * @returns a User object, error and isLoading property
 */
export declare const useGithub: (user: string) => {
    user: User | undefined;
    isLoading: boolean;
    error: any;
};
export {};
