<script setup lang="ts">
import AuthTest from '@/components/development/sb/AuthTest.vue';
import TweetTest from '@/components/development/sb/TweetTest.vue';
import FunctionTest from '@/components/development/sb/FunctionTest.vue';

const sectionClass = 'border-2 p-5';
</script>

<template>
  <div>
    Supabaseテスト

    <div class="space-y-5 mt-10">
      <div :class="sectionClass">
        <AuthTest />
      </div>
      <div :class="sectionClass">
        <TweetTest />
      </div>
      <div :class="sectionClass">
        <FunctionTest />
      </div>
    </div>
  </div>
</template>
