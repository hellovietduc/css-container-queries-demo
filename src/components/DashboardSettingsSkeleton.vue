<template>
  <div class="flex w-full h-full pt-14 ps-8">
    <div class="flex flex-col gap-10 pe-12">
      <h1 class="text-4xl font-semibold">Settings</h1>
      <div class="flex flex-col gap-4 w-[300px]">
        <div v-for="i in 10" :key="i" class="rounded-2xl h-10 bg-slate-200"></div>
      </div>
    </div>
    <div class="grow flex flex-col gap-10 pe-8">
      <h1 class="text-4xl font-semibold">Basic info</h1>
      <div class="grow max-h-[500px] rounded-3xl bg-slate-200"></div>
    </div>
  </div>
</template>
