<script setup lang="ts">
import { useWindowSize } from '@vueuse/core';
import { computed } from 'vue';
import { widthToBreakpoint } from '../bits/breakpoints';

const {width}=useWindowSize()

const breakpoint = computed(() => widthToBreakpoint(width.value))
</script>

<template>
  <div class="fixed bottom-4 start-0 end-0 flex justify-center">
    <p class="grow-0 bg-teal-700 text-white px-4 py-2 rounded-2xl">
      {{ width }}px - {{ breakpoint }}
    </p>
  </div>
</template>
