<template>
  <div
    class="absolute inset-0 flex justify-center items-center bg-[rgba(0,0,0,0.4)]"
  >
    <div
      class="flex flex-col justify-center items-center gap-3 @tablet-portrait/surface-container:gap-4 shadow-md shadow-gray-500 rounded-3xl w-[600px] h-[500px] p-4 bg-slate-100"
    >
      <div class="flex flex-col @tablet-portrait/surface-container:flex-row gap-[1px] @tablet-portrait/surface-container:gap-4" v-for="r in 3">
        <div v-for="c in 3" :key="c" class="bg-amber-500 rounded-lg w-40 h-12"></div>
      </div>
    </div>
  </div>
</template>
