<script setup lang="ts">
import OnboardingPanel from './OnboardingPanel.vue';
import SizeBar from './SizeBar.vue';
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
  <div class="flex w-screen gap-0.5">
    <SurfaceContainerMediaQueries v-if="mode === 'media-queries'" :subtitle="'Using media queries'" />
    <SurfaceContainerContainerQueries v-if="mode === 'container-queries'" :subtitle="'Using container queries'" :x-content-picker="xContentPicker" />
    <OnboardingPanel />
    <SizeBar />
  </div>
</template>
