<template>
  <div
    :class="[
      'absolute',
      'inset-0',

      'flex',
      'justify-center',
      'items-center',

      'pt-40',
      '@tablet-portrait/surface-container:pt-0',
      'tablet-portrait:-@:pt-0',

      'bg-[rgba(0,0,0,0.4)]',
    ]"
  >
    <div
      :class="[
        'flex',
        'flex-col',
        'justify-center',
        'items-center',
        'gap-3',
        '@tablet-portrait/surface-container:gap-4',
        'tablet-portrait:-@:gap-4',

        'shadow-md',
        'shadow-gray-500',
        'rounded-t-3xl',
        'rounded-ee-2xl',
        '@tablet-portrait/surface-container:rounded-3xl',
        'tablet-portrait:-@:rounded-3xl',

        'w-full',
        '@tablet-portrait/surface-container:w-[600px]',
        'tablet-portrait:-@:w-[600px]',

        'h-full',
        '@tablet-portrait/surface-container:h-[500px]',
        'tablet-portrait:-@:h-[500px]',

        'p-4',

        'bg-slate-100',
      ]"
    >
      <div
        :class="[
          'flex',
          'flex-col',
          '@tablet-portrait/surface-container:flex-row',
          'tablet-portrait:-@:flex-row',
          'justify-center',
          'gap-1',
          '@tablet-portrait/surface-container:gap-4',
          'tablet-portrait:-@:gap-4',
          'w-full',
        ]"
        v-for="r in 3"
      >
        <div
          v-for="c in 3"
          :key="c"
          :class="[
            'rounded-lg',
            'w-full',
            '@tablet-portrait/surface-container:w-40',
            'tablet-portrait:-@:w-40',
            'h-12',
            'bg-amber-500',
          ]"
        ></div>
      </div>
    </div>
  </div>
</template>
