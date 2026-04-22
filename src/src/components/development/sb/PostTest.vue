<script setup lang="ts">
import { ref } from 'vue';
import {
  getPosts,
  getPostsByFunc,
  postPost,
  storePostByFunc,
} from '@/services/supabase/post/post';

const content = ref('テスト投稿');
const posts = ref<any[]>([]);

const handleGetPosts = async () => {
  const ret = await getPosts();

  console.log('handleGetPosts', ret);

  if (!ret) return;

  posts.value = ret;
};

const handleGetPostsByFunc = async () => {
  const ret = await getPostsByFunc();

  console.log('handleGetPostsByFunc', ret);

  const rows = ret.posts;

  console.log('rows', rows);

  if (!rows) return;

  posts.value = rows;
};

const handlePostPost = async () => {
  const ret = await postPost(content.value);
  console.log('handlePostPost', ret);
};

const handlePostPostByFunc = async () => {
  const ret = await storePostByFunc(content.value);
  console.log('handlePostPostByFunc', ret);
  console.log('ret.data', ret.data);
};
</script>

<template>
  <div class="space-y-5 border p-5">
    <div class="space-x-3">
      <button @click="handleGetPosts" class="app-btn-primary">投稿取得</button>
      <button @click="handleGetPostsByFunc" class="app-btn-primary">
        投稿取得(Func)
      </button>
    </div>
    <div>
      <input type="text" v-model="content" class="app-form-input" />
      <div class="space-x-3">
        <button @click="handlePostPost" class="app-btn-primary">
          投稿作成
        </button>
        <button @click="handlePostPostByFunc" class="app-btn-primary">
          投稿作成(Func)
        </button>
      </div>
    </div>

    <div class="space-y-4">
      <div v-for="post in posts" :key="post.id" class="p-5 border-2">
        <div>id: {{ post.id }}</div>
        <div>content: {{ post.content }}</div>
        <div>users.name: {{ post.users.name }}</div>
      </div>
    </div>
  </div>
</template>
