import React from "react";

export interface UserInfoProps {
  name: string;
  login: string;
  joined: string;
}

export const UserInfo = (props: UserInfoProps) => {
  const { name, login, joined } = props;

  return (
    <div>
      <h2>{name}</h2>
      <h3>@{login}</h3>
      <div>Joined {joined}</div>
    </div>
  );
};
