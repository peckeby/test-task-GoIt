import UserList from './UserList/UserList';
import usersData from '../assets/users.json';

import { GlobalStyle } from './utils/GlobalStyles';

export const App = () => {
  return (
    <>
      <UserList users={usersData}></UserList>;
      <GlobalStyle />
    </>
  );
};
