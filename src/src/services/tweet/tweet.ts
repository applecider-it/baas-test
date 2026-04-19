import { supabase } from '@/services/supabase/supabase';

import { getAuthUser } from '@/services/user/auth';

export const getTweets = async () => {
  const retTweets = await supabase.from('user_tweets').select();
  console.log('retTweets', retTweets);
};

export const postTweet = async (content: string) => {
  const user = await getAuthUser();

  if (!user) return;

  await supabase.from('user_tweets').insert({
    user_id: user.id,
    content,
  });
};
