import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '~/config/*';
import { Avatar, ListItem, ListItemAvatar, ListItemText }
  from '@material-ui/core';

const RouterLink = styled(Link)`
  color: white;
  &:hover {
    background-color: ${theme.selection};
  }
`;

export default (props) => {
  const
    member = props.member,
    url = `/members/${member.id}`,
    name = `${member.firstname} ${member.secondname}`,
    position = member.position,
    avatar = member.avatar;

  return (
    <ListItem component={RouterLink} to={url}>
      <ListItemAvatar>
        <Avatar alt={name} src={avatar} />
      </ListItemAvatar>
      <ListItemText primary={name} secondary={position} />
    </ListItem>
  );
};
