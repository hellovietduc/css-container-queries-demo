<script setup lang="ts">
import { useResizeObserver } from '@vueuse/core';
import { computed, onMounted, ref } from 'vue';
import { widthToBreakpoint } from '../bits/breakpoints';
import Post from './Post.vue';

const wishList = ref<HTMLElement>()
const wishListWidth = ref(0)

onMounted(()=>{
  wishListWidth.value = wishList.value?.getBoundingClientRect().width ?? 0
})

useResizeObserver(wishList, (entries) => {
  wishListWidth.value = entries[0].contentRect.width
})

const breakpoint = computed(() => widthToBreakpoint(wishListWidth.value))
</script>

<template>
  <div class="grow flex flex-col h-screen rounded-e-2xl bg-blue-200">
    <header class="mt-4 mx-4">
      <h1 class="text-xl font-bold">
        CSS container queries demo
      </h1>
      <p class="text-center">{{ wishListWidth }}px - {{ breakpoint }}</p>
    </header>
    <div ref="wishList" class="self-center flex flex-wrap gap-4 p-4 overflow-hidden">
      <Post v-for="i in 5" :key="i" class="w-[calc(50%-0.5rem)] tablet-portrait:w-[calc(25%-0.75rem)] desktop:max-w-64" />
    </div>
  </div>
</template>
