<script setup lang="ts">
import { ref } from 'vue';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import { auth } from '@/services/firebase/firebase';

const email = ref(import.meta.env.VITE_TESTUSER_EMAIL);
const password = ref('testtest');

const errors = ref<any>({});

/** サインアップ処理実行 */
const execSignup = async () => {
  const ret = await createUserWithEmailAndPassword(
    auth,
    email.value,
    password.value,
  );

  console.log('execSignup', ret);
};

/** ログイン処理実行 */
const execLogin = async () => {
  const ret = await signInWithEmailAndPassword(
    auth,
    email.value,
    password.value,
  );

  console.log('execLogin', ret);
};

/** ログアウト処理実行 */
const handleLogout = async () => {
  const retLogout = await signOut(auth);
  console.log('handleLogout', retLogout);
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
      <button @click="execSignup" class="app-btn-primary">サインアップ</button>
    </div>

    <div>
      <button @click="handleLogout" class="app-btn-primary">ログアウト</button>
    </div>
  </div>
</template>
