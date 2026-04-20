<script setup lang="ts">
import TweetTest from '@/components/development/fb/TweetTest.vue';
import AuthTest from '@/components/development/fb/AuthTest.vue';

const sectionClass = 'border-2 p-5';
</script>

<template>
  <div>
    Firebaseテスト

    <div class="space-y-5 mt-10">
      <div :class="sectionClass">
        <AuthTest />
      </div>
      <div :class="sectionClass">
        <TweetTest />
      </div>
    </div>
  </div>
</template>
