<script setup lang="ts">
import { useResizeObserver } from '@vueuse/core';
import { computed, onMounted, ref } from 'vue';
import { widthToBreakpoint } from '../bits/breakpoints';
import Post from './Post.vue';
import SurfaceHeader from './SurfaceHeader.vue';

defineProps<{
  subtitle: string;
}>();

const container = ref<HTMLElement>();
const containerWidth = ref(0);

onMounted(() => {
  containerWidth.value = container.value?.getBoundingClientRect().width ?? 0;
});

useResizeObserver(container, (entries) => {
  containerWidth.value = entries[0].contentRect.width;
});

const breakpoint = computed(() => widthToBreakpoint(containerWidth.value));
</script>

<template>
  <div
    ref="container"
    class="grow flex flex-col h-screen rounded-e-2xl bg-blue-200"
  >
    <SurfaceHeader :subtitle="subtitle" :container-width="containerWidth" :breakpoint="breakpoint" />
    <div class="self-center flex flex-wrap gap-4 p-4 overflow-hidden">
      <Post
        v-for="i in 7"
        :key="i"
        :class="[
          'w-[calc(50%-0.5rem)]',
          'tablet-portrait:w-[calc(33%-1rem)]',
          'tablet-landscape:w-[calc(25%-0.75rem)]',
          'desktop:max-w-64',
        ]"
      />
    </div>
  </div>
</template>
