import React from "react";

import {Window, Header, SearchInput} from './components';
import {Root} from './root';

export const App = () => {
  return (
    <Root>
      <Window>
        <>
          <Header/>
          <SearchInput/>
        </>
      </Window>
    </Root>
  );
};
