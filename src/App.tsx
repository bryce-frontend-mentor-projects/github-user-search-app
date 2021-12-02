import React from "react";
import { format } from "date-fns";

import LocationIcon from './assets/icon-location.svg';
import WebsiteIcon from './assets/icon-website.svg';
import TwitterIcon from './assets/icon-twitter.svg';
import CompanyIcon from './assets/icon-company.svg';

import { Root } from "./root";
import {
  Avatar,
  Bio,
  Card,
  Header,
  InfoItemList,
  InfoItem,
  Meta,
  MetaItem,
  SearchInput,
  UserInfo,
  Window,
} from "./components";

export const App = () => {
  const user = {
    login: "octocat",
    avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
    name: "The Octocat",
    created_at: "2011-01-25T18:44:36Z",
    public_repos: 8,
    followers: 4200,
    following: 9,
    company: "@github",
    blog: "https://github.blog",
    location: "San Francisco",
    twitter_username: undefined,
    bio: undefined,
  };

  // 25 Jan 2011

  const formattedDate = format(new Date(user["created_at"]), "d MMM yyyy");
  return (
    <>
      <Root>
        <Window>
          <>
            <Header />
            <SearchInput />
            <Card>
              <Avatar url={user["avatar_url"]} />
              <UserInfo
                name={user.name}
                login={user.login}
                joined={formattedDate}
              />
              <Bio bio={user.bio} />
              <Meta>
                <MetaItem label="Repos" value={user["public_repos"]}/>
                <MetaItem label="Followers" value={user.followers}/>
                <MetaItem label="Following" value={user.following}/>
              </Meta>
              <InfoItemList>
                <InfoItem icon={<LocationIcon/>} value={user.location}/>
                <InfoItem icon={<WebsiteIcon/>} value={user.blog}/>
                <InfoItem icon={<TwitterIcon/>} value={user["twitter_username"]}/>
                <InfoItem icon={<CompanyIcon/>} value={user.company}/>
              </InfoItemList>
            </Card>
          </>
        </Window>
      </Root>
    </>
  );
};
