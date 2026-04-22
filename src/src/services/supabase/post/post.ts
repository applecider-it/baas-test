import { supabase } from '@/services/supabase/supabase';

import { getAuthUser } from '@/services/supabase/user/auth';

/** 投稿一覧取得 */
export const getPosts = async () => {
  const retPosts = await supabase
    .from('user_posts')
    .select(
      `
      id,
      content,
      created_at,
      users (
        name
      )
    `,
    )
    .order('created_at', { ascending: false })
    .limit(5);

  const posts = retPosts.data;

  return posts;
};

/** エッジ関数から投稿一覧取得 */
export const getPostsByFunc = async () => {
  const ret = await supabase.functions.invoke('posts');

  console.log('getPostsByFunc', ret);

  return ret.data;
};

/** 投稿送信 */
export const postPost = async (content: string) => {
  const auth = await getAuthUser();

  if (!auth || !auth.user?.id) {
    console.error('有効なユーザーがありません');
    return;
  }

  const result = await supabase.from('user_posts').insert({
    user_id: auth.user.id,
    content,
  });

  console.log({ result });
};

/** エッジ関数から投稿送信 */
export const storePostByFunc = async (content: string) => {
  const result = await supabase.functions.invoke('store-post', {
    body: { content },
  });

  console.log('storePostByFunc', result);

  return result;
};
