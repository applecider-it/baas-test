<script setup lang="ts">
import LoginForm from '@/components/auth/LoginForm.vue';
import AuthTest from '@/components/development/AuthTest.vue';
import TweetTest from '@/components/development/TweetTest.vue';
import FunctionTest from '@/components/development/FunctionTest.vue';

const sectionClass = 'border-2 p-5';
</script>

<template>
  <div>
    開発者向けページ

    <div class="space-y-5 mt-10">
      <div :class="sectionClass">
        <LoginForm />
      </div>
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
