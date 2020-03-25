import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from '@material-ui/styles';
import { muiTheme } from '~/config/*';
import { Grid } from '@material-ui/core';

const Wrapper = styled(Grid)`
  height: 100vh;
  padding-top: 72px;
  background-color: #0c0a20;
  color: #ffffff;
`;

export default (props) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <Wrapper
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        {props.children}
      </Wrapper>
    </ThemeProvider>
  );
};
