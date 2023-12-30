<script setup lang="ts">
import ContentPicker from './ContentPicker.vue';
import ContentPickerFallback from './ContentPickerFallback.vue';
import FloatingBar from './FloatingBar.vue';

withDefaults(
  defineProps<{
    xContentPicker?: boolean;
    xContentPickerFallback?: boolean;
  }>(),
  {
    xContentPicker: false,
    xContentPickerFallback: false,
  }
);
</script>

<template>
  <div class="w-screen h-screen bg-slate-100">
    <FloatingBar />
    <ContentPicker v-if="xContentPicker" />
    <ContentPickerFallback v-if="xContentPickerFallback" />
  </div>
</template>
