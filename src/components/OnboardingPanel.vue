<script setup lang="ts">
import { useEventListener, useMouse } from '@vueuse/core';
import { ref } from 'vue';

const width = ref(400);
const dragHandle = ref<HTMLElement>();

const startX = ref(0);
const startWidth = ref(0);
const isResizing = ref(false);
const { x: mouseX } = useMouse();

const startResize = () => {
  if (isResizing.value) return
  startX.value = mouseX.value;
  startWidth.value = width.value;
  isResizing.value = true;
};

const resize = () => {
  if (!isResizing.value) return;
  width.value = startWidth.value - (mouseX.value - startX.value);
};

const stopResize = () => {
  isResizing.value = false;
};

useEventListener('mousemove', resize);
useEventListener('mouseup', stopResize)
</script>

<template>
  <div
    class="shrink-0 relative flex justify-center items-center h-screen p-4 rounded-s-2xl bg-slate-100"
    :style="{ width: `${width}px` }"
  >
    <p>{{ width }}px</p>
    <button
      ref="dragHandle"
      class="absolute -start-2.5 h-10 w-5 p-1 outline-none rounded bg-slate-600 cursor-col-resize"
      @mousedown="startResize"
      @mouseup="stopResize"
    ></button>
  </div>
</template>
