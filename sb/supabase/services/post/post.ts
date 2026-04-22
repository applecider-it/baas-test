/** ツイート一覧取得 */
export const getPosts = async (supabase) => {
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

  console.log({ retPosts });

  return retPosts;
};

/** 投稿送信 */
export const storePost = async (supabase, user: any, content: string) => {
  const result = await supabase.from('user_posts').insert({
    user_id: user.id,
    content,
  });

  console.log({ result });

  return result;
};
