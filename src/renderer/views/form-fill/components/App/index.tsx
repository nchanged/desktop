import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { createGlobalStyle } from 'styled-components';

import List from '../List';
import { Style } from '../../style';
import { StyledApp } from './style';

const GlobalStyle = createGlobalStyle`${Style}`;

export const App = observer(() => {
  return (
    <StyledApp>
      <GlobalStyle />
      <List />
    </StyledApp>
  );
});
