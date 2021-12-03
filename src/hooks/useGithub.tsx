import useSWR from "swr";
import {Nullable} from '../types';

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

export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);

  if(!res.ok) {
    const error: any = new Error('An error occurred while fetching the data');
    error.info = await res.json();
    error.status = res.status;

    throw error;
  }

  return res.json();
}

export const useGithub = (user: string) => {
  const { data, error } = useSWR<User>(
    `https://api.github.com/users/${user}`,
    fetcher,
    {
      shouldRetryOnError: false,
      revalidateOnFocus: false
    }
  );

  return {
    user: data,
    isLoading: !data && !error,
    error
  };
};
