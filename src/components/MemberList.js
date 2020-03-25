import React from 'react'
import styled from 'styled-components'
import { Box, List } from '@material-ui/core'
import { theme, mock } from '~/config/*'
import { Member, ListSubheader } from '~/components/*'

const StyledBox = styled(Box)`
  @media screen and (min-width: 240px) and (max-width: 320px) {
    min-width: 240px;
  };
  @media screen and (min-width: 320px) {
    width: 320px;
  };
  background-color: ${theme.paperBg};
`

const items = []
for (const [index, value] of mock.members.entries()) {
  items.push(<Member key={index} member={value}/>)
}

export const MemberList = (props) => {
  const { showBackButton } = props

  return (
    <StyledBox boxShadow={1}>
      <List subheader={
        <ListSubheader
          showBackButton={showBackButton}
        />
      }>
        {items}
      </List>
    </StyledBox>
  )
}
