<script setup lang="ts">
import Post from './Post.vue';
</script>

<template>
  <div class="grow flex flex-col h-screen rounded-e-2xl bg-blue-200">
    <header class="mt-4 mx-4">
      <h1 class="text-xl font-bold">
        CSS container queries demo
      </h1>
    </header>
    <div class="grow self-center flex flex-wrap gap-4 p-4">
      <Post v-for="i in 5" :key="i" class="w-[calc(50%-0.5rem)] tablet-portrait:w-[calc(25%-0.75rem)] desktop:max-w-64" />
    </div>
  </div>
</template>
