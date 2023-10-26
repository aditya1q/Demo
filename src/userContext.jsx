import { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

// eslint-disable-next-line react/prop-types
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [registeredUsers, setRegisteredUsers] = useState([]);

  const login = (username, password) => {
    const foundUser = registeredUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (foundUser) {
      setUser(foundUser);
      
    } else {
      console.log('Login failed');
    }
  };

  const register = (username, password) => {
    setRegisteredUsers((prevUsers) => [
      ...prevUsers,
      { username: username, password: password }
    ]);
  };

  

  return (
    <UserContext.Provider value={{ user, login, register  }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
