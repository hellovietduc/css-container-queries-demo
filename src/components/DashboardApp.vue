<script setup lang="ts">
import ContentPicker from './ContentPicker.vue';
import FloatingBar from './FloatingBar.vue';

withDefaults(
  defineProps<{
    xContentPicker?: boolean;
  }>(),
  {
    xContentPicker: false,
  }
);
</script>

<template>
  <div class="w-screen h-screen bg-slate-100">
    <FloatingBar />
    <ContentPicker v-if="xContentPicker" />
  </div>
</template>
