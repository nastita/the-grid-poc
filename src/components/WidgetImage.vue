<script setup lang="ts">
defineProps<{
  src: string
}>()
</script>

<template>
  <div class="flex h-full rounded-[10px] overflow-hidden">
    <img class="flex-shrink-0 min-h-full min-w-full object-cover" :src="src" alt="image" />
  </div>
</template>
