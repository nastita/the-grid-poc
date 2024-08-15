<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{ title: string }>()
</script>

<template>
  <div
    class="flex h-full items-center justify-center p-4 bg-purple-58 text-neutral-100 rounded-xl overflow-hidden"
  >
    <!-- Text size needs to auto resize based on widget size -->
    <h1 class="heading-apax-48-bold">{{ title }}</h1>
  </div>
</template>
