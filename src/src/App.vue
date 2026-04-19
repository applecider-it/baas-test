<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div>
    <div class="p-5">
      <RouterLink to="/">Home</RouterLink>
    </div>
  </div>

  <RouterView />
</template>
