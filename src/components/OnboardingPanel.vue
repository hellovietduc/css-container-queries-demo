<script setup lang="ts">
import { ref } from 'vue';

const width = ref(400);
</script>

<template>
  <div
    class="shrink-0 flex justify-center items-center h-screen rounded-s-2xl bg-slate-100"
    :style="{ width: `${width}px` }"
  >
    <div class="flex gap-3">
      <button class="bg-lime-500 px-1" @click="width += 10">+10</button>
      <p>{{ width }}px</p>
      <button class="bg-lime-500 px-1" @click="width -= 10">-10</button>
    </div>
  </div>
</template>
