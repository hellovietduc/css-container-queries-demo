<script setup lang="ts">
import FloatingBar from './FloatingBar.vue';
import OnboardingPanel from './OnboardingPanel.vue';
import SurfaceContainer from './SurfaceContainer.vue';
</script>

<template>
  <div class="relative flex w-screen gap-0.5">
    <SurfaceContainer />
    <OnboardingPanel />
    <FloatingBar />
  </div>
</template>
