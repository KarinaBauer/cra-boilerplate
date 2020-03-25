import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Icon, IconButton, ListSubheader as Subheader }
  from '@material-ui/core';

const
  Wrapper = styled.div`
    display: flex;
  `,

  BackButton = (props) => {
    if (props.show) {
      return <IconButton component={Link} to="/" aria-label="back">
        <Icon>arrow_back</Icon>
      </IconButton>
    } else {
      return '';
    };
  };

export default (props) => {
  const show = props.showBackButton;

  return (
    <Wrapper>
      <BackButton show={show} />
      <Subheader component="div">
        Company members
      </Subheader>
    </Wrapper>
  );
};
