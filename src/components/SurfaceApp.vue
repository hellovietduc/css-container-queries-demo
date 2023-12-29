<script setup lang="ts">
import FloatingBar from './FloatingBar.vue';
import OnboardingPanel from './OnboardingPanel.vue';
import SurfaceContainerContainerQueries from './SurfaceContainerContainerQueries.vue';
import SurfaceContainerMediaQueries from './SurfaceContainerMediaQueries.vue';

defineProps<{
  mode: 'media-queries' | 'container-queries';
}>()
</script>

<template>
  <div class="relative flex w-screen gap-0.5">
    <SurfaceContainerMediaQueries v-if="mode === 'media-queries'" />
    <SurfaceContainerContainerQueries v-if="mode === 'container-queries'" />
    <OnboardingPanel />
    <FloatingBar />
  </div>
</template>
