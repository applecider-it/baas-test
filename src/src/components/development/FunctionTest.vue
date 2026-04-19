<script setup lang="ts">
import { ref } from 'vue';
import { supabaseFunction, sendFunction } from '@/services/supabase/supabase';

const handleFunctionTest = async () => {
  const ret = await sendFunction('hello', { name: 'テスト' });

  console.log('handleFunctionTest', ret);

  const ret2 = await supabaseFunction.functions.invoke('hello', {
    body: { name: 'テスト2' },
  });

  console.log('ret2.data', ret2.data);
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
