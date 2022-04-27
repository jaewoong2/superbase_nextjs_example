import { supabase } from "lib/supabase";

export const useSupaLogin = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    if (email.trim() === "" || password.trim() === "") {
      return;
    }
    const { error, user, session } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      return { error, user, session };
    } else {
      return { error, user, session };
    }
  } catch (err) {
    return { error: err, user: null, session: null };
  }
};
