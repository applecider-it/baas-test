import { supabase } from '@/services/supabase/supabase';

export const getAuthUser = async () => {
  const retUser = await supabase.auth.getUser();
  const user = retUser?.data?.user;
  console.log('retUser', retUser);
  console.log('user', user);

  return user;
};
