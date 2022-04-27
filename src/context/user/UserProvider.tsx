import { Session, User } from "@supabase/supabase-js";
import React, { useState } from "react";
import { UserContext, initalState } from "./userContext";

type UserProviderProps = {
  children: React.ReactElement | React.ReactNode | JSX.Element;
};

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>(initalState["user"]);
  const [session, setSession] = useState<Session>(initalState["session"]);

  const handleUser = (newUser: User) => {
    setUser(newUser);
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
