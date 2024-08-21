<script setup lang="ts">
defineProps<{
  title: string
  text: string
  bgColor?: string
}>()
</script>

<template>
  <div
    :class="
      'flex flex-col h-full items-center justify-center p-4 text-neutral-100 rounded-[10px] overflow-hidden ' +
      bgColor
    "
  >
    <h1 class="heading-apax-24-medium">{{ title }}</h1>
    <p class="text-apax-16-regular mt-2 text-center">{{ text }}</p>
  </div>
</template>
