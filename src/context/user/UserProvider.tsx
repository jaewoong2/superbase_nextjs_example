import { Session, User } from "@supabase/supabase-js";
import React, { useState } from "react";
import { UserContext, initalState } from "./UserContext";

type UserProviderProps = {
  children: React.ReactElement | React.ReactNode | JSX.Element;
};

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>(initalState["user"]);
  const [isLogin, setIsLogin] = useState(false);
  const [session, setSession] = useState<Session>(initalState["session"]);

  const handleUser = (newUser: User) => {
    setUser(newUser);
  };
  const handleIsLogin = (bool: boolean) => {
    setIsLogin(bool);
  };
  const handleSession = (newSession: Session) => {
    setSession(newSession);
  };

  return (
    <UserContext.Provider
      value={{
        user: user,
        session: session,
        setUser: handleUser,
        setSession: handleSession,
        isLogin,
        setIsLogin: handleIsLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
