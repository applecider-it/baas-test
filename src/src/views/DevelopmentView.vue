<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { supabase } from '@/services/supabase/supabase';
import LoginForm from '@/components/auth/LoginForm.vue';

async function getInstruments() {
  const retComments = await supabase.from('comments').select()
  console.log('retComments', retComments);

  const retUser = await supabase.auth.getUser()
  console.log('retUser', retUser);
}
onMounted(() => {
   getInstruments()
})
</script>

<template>
  <div>
    開発者向けページ
    <LoginForm />
  </div>
</template>
