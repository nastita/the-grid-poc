<script setup lang="ts">
defineProps<{
  title: string
  src: string
  bgColor?: string
}>()
</script>

<template>
  <div
    :class="
      'flex h-full items-center justify-center p-4 text-neutral-100 rounded-xl overflow-hidden ' +
      bgColor
    "
  >
    <a :h-ref="src">
      <h1 class="heading-apax-48-bold">{{ title }}</h1>
    </a>
  </div>
</template>
