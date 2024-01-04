<script setup lang="ts">
defineProps<{
  subtitle: string;
  containerWidth: number;
  breakpoint: string;
}>();
</script>

<template>
  <header class="mt-4 mx-4">
    <h1 class="text-xl font-bold">CSS container queries demo</h1>
    <h2 class="mb-4">
      {{ subtitle }}
    </h2>
    <p class="text-center">{{ containerWidth }}px - {{ breakpoint }}</p>
  </header>
</template>
