<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="p-5 bg-gray-200">
    <RouterLink to="/">Home</RouterLink>
  </div>

  <div class="p-3">
    <RouterView />
  </div>
</template>
