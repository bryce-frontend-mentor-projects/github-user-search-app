import React from "react";
import { format } from "date-fns";

import {
  Avatar,
  Bio,
  Card,
  Header,
  InfoItemList, InfoItem,
  Meta, MetaItem,
  SearchInput,
  UserInfo,
  Window,
} from "./components";
import { useGithub } from "./hooks/useGithub";
import { User } from "./types";
import { Root } from "./root";

import CompanyIcon from './assets/icon-company.svg';
import LocationIcon from './assets/icon-location.svg';
import WebsiteIcon from './assets/icon-website.svg';
import TwitterIcon from './assets/icon-twitter.svg';

const formatDate = (date: number) =>
  date ? format(new Date(date), "dd MM yyyy") : "";

export const App = () => {
  const [currentUserName, setCurrentUserName] =
    React.useState<string>("octocat");
  const [currentUser, setCurrentUser] = React.useState<User | undefined>(
    undefined
  );

  const { user, error, isLoading } = useGithub(currentUserName);

  React.useEffect(() => {
    if (user && !error) {
      setCurrentUser(user);
    }
  }, [user, setCurrentUser, error]);

  return (
    <Root>
      <Window>
        <>
          <Header />
          <SearchInput hasError={error} onChange={user => setCurrentUserName(user)} />
          <Card>
            {isLoading && <div>loading...</div>}
            {currentUser && (
              <>
                <Avatar url={currentUser["avatar_url"]} />
                <UserInfo
                  name={currentUser.name}
                  login={currentUser.login}
                  joined={formatDate(currentUser["created_at"])}
                />
                <Bio bio={currentUser.bio}/>
                <Meta>
                  <MetaItem label="Repos" value={currentUser["public_repos"]}/>
                  <MetaItem label="Followers" value={currentUser.followers}/>
                  <MetaItem label="Following" value={currentUser.following}/>
                </Meta>
                <InfoItemList>
                  <InfoItem icon={<LocationIcon/>} value={currentUser.location}/>
                  <InfoItem icon={<WebsiteIcon/>} value={currentUser.blog} url={currentUser.blog}/>
                  <InfoItem icon={<TwitterIcon/>} value={currentUser["twitter_username"]} url={`https://github.com/${currentUser["twitter_username"]}`}/>
                  <InfoItem icon={<CompanyIcon/>} value={currentUser.company}/>
                </InfoItemList>
              </>
            )}
          </Card>
        </>
      </Window>
    </Root>
  );
};
