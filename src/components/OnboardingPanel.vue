<script setup lang="ts">
import { useDocumentVisibility, useEventListener, useMouse } from '@vueuse/core';
import { ref, watch } from 'vue';

const width = ref(400);

const startX = ref(0);
const startWidth = ref(0);
const isResizing = ref(false);

const { x: mouseX } = useMouse();

const startResize = () => {
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

const documentVisibility = useDocumentVisibility();
watch(documentVisibility, (current, previous) => {
  if (current === 'visible' && previous === 'hidden') {
    stopResize();
  }
});
</script>

<template>
  <div
    class="shrink-0 relative flex justify-center items-center h-screen p-4 rounded-s-2xl bg-slate-100"
    :style="{ width: `${width}px` }"
  >
    <p>{{ width }}px</p>
    <button
      class="absolute -start-2.5 h-10 w-5 p-1 rounded bg-slate-600 cursor-col-resize"
      @mousedown="startResize"
      @mouseup="stopResize"
    ></button>
  </div>
</template>
