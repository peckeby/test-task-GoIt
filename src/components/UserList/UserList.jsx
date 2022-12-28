import UserCard from 'components/UserCard/UserCard';

import { UserListUl } from './UserList.styled';

export default function UserList({ users }) {
  return (
    <UserListUl>
      {users.map(({ id, user, tweets, followers, avatar }) => (
        <UserCard
          key={id}
          avatar={avatar}
          name={user}
          tweetsNumber={tweets}
          totalFollowers={followers}
        ></UserCard>
      ))}
    </UserListUl>
  );
}
