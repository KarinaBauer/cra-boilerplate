import React from 'react'
import { ProfileCard, MemberList } from '~/components/*'
import { mock } from '~/config/*'

export const User = (props) => {
  const
    { params } = props.match,
    member = mock.members[params.id - 1]

  return (
    <div>
      <ProfileCard data={member} />
      <MemberList showBackButton={true} />
    </div>
  )
}
