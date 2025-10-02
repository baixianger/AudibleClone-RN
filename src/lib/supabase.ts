import { createClient } from "@supabase/supabase-js";
import { useAuth } from "@clerk/clerk-expo";

const useSupabase = () => {
  const { getToken } = useAuth();
  return createClient(
    process.env.EXPO_PUBLIC_SUPABASE_URL,
    process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
    {
      accessToken: async () => getToken() ?? null,
    }
  );
};
export { useSupabase };
