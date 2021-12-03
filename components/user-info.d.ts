import { Nullable } from '../types';
export interface UserInfoProps {
    name: Nullable<string>;
    login: string;
    joined: string;
}
export declare const UserInfo: (props: UserInfoProps) => JSX.Element;
