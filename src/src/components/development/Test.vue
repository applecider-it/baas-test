<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { supabase } from '@/services/supabase/supabase';
import { getAuthUser } from '@/services/user/auth';
import { getTweets, postTweet } from '@/services/tweet/tweet';

const router = useRouter();

const content = ref("テストツイート")

const handleGetAuthUser = async () => {
  const user = await getAuthUser();
  console.log('handleGetAuthUser', user);
}

const handleGetTweets = async () => {
  const tweets = await getTweets();
  console.log('handleGetTweets', tweets);
}

const handlePostTweet = async () => {
  const ret = await postTweet(content.value);
  console.log('handlePostTweet', ret);
}
</script>

<template>
  <div class="space-y-5 border p-5">
    <div>
      <button @click="handleGetAuthUser" class="app-btn-primary">ログインユーザー取得</button>
    </div>
    <div>
      <button @click="handleGetTweets" class="app-btn-primary">ツイート取得</button>
    </div>
    <div>
      <input type="text" v-model="content" class="app-form-input" />
      <button @click="handlePostTweet" class="app-btn-primary">ツイート作成</button>
    </div>
  </div>
</template>
