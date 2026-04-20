<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { supabase } from '@/services/supabase/supabase';
import { getAuthUser } from '@/services/supabase/user/auth';

const email = ref(import.meta.env.VITE_TESTUSER_EMAIL);
const password = ref('testtest');

const errors = ref<any>({});

const router = useRouter();

/** ログイン処理実行 */
const execLogin = async () => {
  const ret = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });

  console.log('execLogin', ret);
};

const handleGetAuthUser = async () => {
  const user = await getAuthUser();
  console.log('handleGetAuthUser', user);
};

const handleLogout = async () => {
  const retLogout = await supabase.auth.signOut();
  console.log('handleGetAuthUser', retLogout);
};
</script>

<template>
  <div class="space-y-5 border p-5">
    <div>
      <input
        type="text"
        v-model="email"
        class="app-form-input"
        autocomplete="on"
      />

      <div v-if="errors.email" class="app-form-error">
        {{ errors.email[0] }}
      </div>
    </div>

    <div>
      <input type="text" v-model="password" class="app-form-input" />

      <div v-if="errors.password" class="app-form-error">
        {{ errors.password[0] }}
      </div>
    </div>

    <div>
      <button @click="execLogin" class="app-btn-primary">ログイン</button>
    </div>
    <div>
      <button @click="handleGetAuthUser" class="app-btn-primary">
        ログインユーザー取得
      </button>
    </div>
    <div>
      <button @click="handleLogout" class="app-btn-primary">ログアウト</button>
    </div>
  </div>
</template>
