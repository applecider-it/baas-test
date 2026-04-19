<script setup lang="ts">
import LoginForm from '@/components/auth/LoginForm.vue';
import Test from '@/components/development/Test.vue';

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
        <Test />
      </div>
    </div>
  </div>
</template>
