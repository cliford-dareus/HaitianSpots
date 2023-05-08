import React, { createContext, useState, useEffect, useContext } from "react";

const userAuthContext = createContext();

const UserAuthProvider = ({ children }) => {
  const [userInfo, setUserInfo ]=useState(null);
  const [user, setUser] = useState({});
  const [isLoading, setLoading] = useState();
  const [ errors, setError] = useState(null);

  const saveUserInfo = (data) => {
    setUser({
        user: data.user,
        userId: data.userId,
    })
  };

  return (
    <userAuthContext.Provider
      value={{
        user,
        saveUserInfo,
        setError,
        errors,
        isLoading,
        setLoading
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(userAuthContext);
};

export { UserAuthProvider };
