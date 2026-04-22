<script setup lang="ts">
import { ref } from 'vue';
import { supabase } from '@/services/supabase/supabase';

const handleFunctionTest = async () => {
  const ret = await supabase.functions.invoke('hello', {
    body: { name: 'テスト' },
  });

  console.log('handleFunctionTest', ret.data);
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
