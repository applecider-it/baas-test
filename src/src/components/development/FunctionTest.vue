<script setup lang="ts">
import { ref } from 'vue';
import { supabase, sentFunction } from '@/services/supabase/supabase';

const handleFunctionTest = async () => {
  const ret = await sentFunction('hello', { name: 'テスト' });

  console.log('handleFunctionTest', ret);
};
</script>

<template>
  <div class="space-y-5 border p-5">
    <div>
      <button @click="handleFunctionTest" class="app-btn-primary">
        FunctionTest
      </button>
    </div>
  </div>
</template>
