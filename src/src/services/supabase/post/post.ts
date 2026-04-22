import { supabase, execFunction } from '@/services/supabase/supabase';

import { getAuthUser } from '@/services/supabase/user/auth';

/** ツイート一覧取得 */
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

/** エッジ関数からツイート一覧取得 */
export const getPostsByFunc = async () => {
  const ret = await execFunction('posts', { name: 'テスト' });

  console.log('getPostsByFunc', ret);

  return ret.data;
};

/** ツイート送信 */
export const postPost = async (content: string) => {
  const auth = await getAuthUser();

  if (!auth || !auth.user?.id) {
    console.error('有効なユーザーがありません');
    return;
  }

  await supabase.from('user_posts').insert({
    user_id: auth.user.id,
    content,
  });
};
