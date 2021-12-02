import React from "react";
import {format} from 'date-fns';

import {Root} from './root';
import {Avatar,Card, Header, SearchInput, UserInfo, Window} from './components';

// const Centered = styled.div`
//   margin-top: auto;
//   margin-bottom: auto;
//   text-align: center;
// `

// const Header = styled.header`
//   display: flex;
// `;

export const App = () => {
  const user = {
    "login": "octocat",
    "avatar_url": "https://avatars.githubusercontent.com/u/583231?v=4",
    "name": "The Octocat",
    "created_at": "2011-01-25T18:44:36Z",
    "public_repos": 8,
    "followers": 4200,
    "following": 9,
    "company": "@github",
    "blog": "https://github.blog",
    "location": "San Francisco",    
    "twitter_username": null,
  }

  // 25 Jan 2011

  const formattedDate = format(new Date(user["created_at"]), 'd MMM yyyy')
  return (
    <>
      <Root>
        <Window>
          <>
            <Header/>
            <SearchInput/>
            <Card>
              <Avatar url={user["avatar_url"]}/>
              <UserInfo name={user.name} login={user.login} joined={formattedDate}/>
            </Card>
          </>
        </Window>
      </Root>
    </>
  );
};
