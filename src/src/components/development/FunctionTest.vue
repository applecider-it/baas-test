<script setup lang="ts">
import { ref } from 'vue';
import { supabase, supabaseFunction, sendFunction } from '@/services/supabase/supabase';

const handleFunctionTest = async () => {
  const ret = await sendFunction('hello', { name: 'テスト' });

  console.log('handleFunctionTest', ret);

  const {
    data: { session },
  } = await supabase.auth.getSession();

  console.log(session);

  const ret2 = await supabaseFunction.functions.invoke('hello', {
    body: { name: 'テスト2' },
    headers: {
      Authorization: `Bearer ${session?.access_token}`,
    },
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
