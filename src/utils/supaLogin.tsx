import { supabase } from "lib/supabase";

export const supaLogin = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    if (email.trim() === "" || password.trim() === "") {
      return { error: "blank issue", user: null, session: null };
    }
    const { error, user, session } = await supabase.auth.signIn({
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
