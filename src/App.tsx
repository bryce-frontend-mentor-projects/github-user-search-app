import React from "react";
import { format } from "date-fns";

import { useGithub } from "./hooks/useGithub";

import LocationIcon from "./assets/icon-location.svg";
import WebsiteIcon from "./assets/icon-website.svg";
import TwitterIcon from "./assets/icon-twitter.svg";
import CompanyIcon from "./assets/icon-company.svg";

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
  const [currentUser, setCurrentUser] = React.useState<string>("octocat");

  const { user, error, isLoading } = useGithub(currentUser);

  console.log("USER", user);

  if (isLoading) {
    return <div>loading...</div>;
  }

  const formattedDate = user ? format(new Date(user["created_at"]), "dd MMM yyyy") : "";
  return (
    <>
      <Root>
        <Window>
          <>
            <Header />
            <SearchInput hasError={error} onChange={(user) => setCurrentUser(user)} />
            {user && !error && (
              <Card>
                <Avatar url={user["avatar_url"]} />
                <UserInfo
                  name={user.name}
                  login={user.login}
                  joined={formattedDate}
                />
                <Bio bio={user.bio} />
                <Meta>
                  <MetaItem label="Repos" value={user["public_repos"]} />
                  <MetaItem label="Followers" value={user.followers} />
                  <MetaItem label="Following" value={user.following} />
                </Meta>
                <InfoItemList>
                  <InfoItem icon={<LocationIcon />} value={user.location} />
                  <InfoItem icon={<WebsiteIcon />} value={user.blog} />
                  <InfoItem
                    icon={<TwitterIcon />}
                    value={user["twitter_username"]}
                  />
                  <InfoItem icon={<CompanyIcon />} value={user.company} />
                </InfoItemList>
              </Card>
            )}
          </>
        </Window>
      </Root>
    </>
  );
};
