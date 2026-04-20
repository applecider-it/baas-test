<script setup lang="ts">
import { ref } from 'vue';

import { getTweets, postTweet } from '@/services/firebase/tweet/tweet';

const content = ref('テストツイート');
const tweets = ref<any[]>([]);

const handleGetTweets = async () => {
  console.log('handleGetTweets');

  const rows = await getTweets();

  tweets.value = rows;
};

const handlePostTweet = async () => {
  console.log('handlePostTweet');

  await postTweet(content.value);
};
</script>

<template>
  <div class="space-y-5 border p-5">
    <div>
      <button @click="handleGetTweets" class="app-btn-primary">
        ツイート取得
      </button>
    </div>
    <div>
      <input type="text" v-model="content" class="app-form-input" />
      <button @click="handlePostTweet" class="app-btn-primary">
        ツイート作成
      </button>
    </div>

    <div class="space-y-4">
      <div v-for="tweet in tweets" :key="tweet.id" class="p-5 border-2">
        <div>content: {{ tweet.content }}</div>
        <div>email: {{ tweet.email }}</div>
      </div>
    </div>
  </div>
</template>
