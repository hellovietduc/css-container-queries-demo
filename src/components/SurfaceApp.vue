<script setup lang="ts">
import FloatingBar from './FloatingBar.vue';
import OnboardingPanel from './OnboardingPanel.vue';
import SurfaceContainerContainerQueries from './SurfaceContainerContainerQueries.vue';
import SurfaceContainerMediaQueries from './SurfaceContainerMediaQueries.vue';

withDefaults(
  defineProps<{
    mode: 'media-queries' | 'container-queries';
    xContentPicker?: boolean;
  }>(),
  {
    xContentPicker: false,
  }
);
</script>

<template>
  <div class="relative flex w-screen gap-0.5">
    <SurfaceContainerMediaQueries v-if="mode === 'media-queries'" />
    <SurfaceContainerContainerQueries v-if="mode === 'container-queries'" :x-content-picker="xContentPicker" />
    <OnboardingPanel />
    <FloatingBar />
  </div>
</template>
