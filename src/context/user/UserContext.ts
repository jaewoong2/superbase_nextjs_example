import { Session, User } from "@supabase/supabase-js";
import { createContext } from "react";


export interface UserContextInterface {
    user: User;
    session: Session;
    setUser: (user: User) => void;
    setSession: (session: Session) => void;
}

export const initalState: UserContextInterface = {
    user: {
        app_metadata: {},
        user_metadata: {},
        id: '',
        aud: '',
        confirmation_sent_at: '',
        email: '',
        created_at: '',
        confirmed_at: '',
        last_sign_in_at: '',
        role: '',
        updated_at: '',
    } || null,
    session: {
        access_token: '',
        token_type: '',
        user: null,
    } || null,
    setUser: () => { },
    setSession: () => { },
}


export const UserContext = createContext<UserContextInterface>(initalState);