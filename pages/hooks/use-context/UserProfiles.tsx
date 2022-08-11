import React, { useContext } from 'react';
import { UserContext } from './use-context-example';

const UserProfiles = () => {
  const users = useContext(UserContext);
  return (
    <div>
      {users.map((user, index) => (
        <li key={index}>
          I am {user.name} and I am a {user.occupation}!
        </li>
      ))}
    </div>
  );
};

export default UserProfiles;
