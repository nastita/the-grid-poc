<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  url: string
}>()
</script>

<template>
  <div class="flex h-full rounded-xl overflow-hidden">
    <img class="flex-shrink-0 min-h-full min-w-full object-cover" :src="url" alt="image" />
  </div>
</template>
