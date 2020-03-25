import React from 'react';
import { ProfileCard, MemberList } from '~/components/*';
import { mock } from '~/config/*';

export default (props) => {
  const
    { params } = props.match,
    member = mock.members[params.id - 1];

  console.log(member);

  return (
    <div>
      <ProfileCard data={member} />
      <MemberList showBackButton={true} />
    </div>
  );
};
