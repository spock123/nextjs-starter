import { createContext } from 'react';
import UserProfiles from './UserProfiles';

const users = [
  {
    name: 'Lars Jeppesen',
    occupation: 'Wizard'
  },
  {
    name: 'Simone Araujo',
    occupation: 'Lawyer'
  }
];

export const UserContext = createContext(users);

import { Frame } from '@/components';

const UseContextComponent = () => {
  return (
    <>
      <Frame title="useContext">
        <UserContext.Provider value={users}>
          <UserProfiles />
        </UserContext.Provider>
      </Frame>
    </>
  );
};

export default UseContextComponent;
