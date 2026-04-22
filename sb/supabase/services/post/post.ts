
/** ツイート一覧取得 */
export const getPosts = async (supabase) => {
  const retPosts = await supabase
    .from('user_posts')
    .select(
      `
      id,
      content,
      created_at
    `,
    )
    .order('created_at', { ascending: false })
    .limit(5);

  console.log({retPosts})

  const posts = retPosts.data;

  return posts;
};
