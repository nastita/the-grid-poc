<script setup lang="ts">
import { useScriptTag } from '@vueuse/core'

defineProps<{
  src: string
}>()

useScriptTag('https://platform.twitter.com/widgets.js')
</script>

<template>
  <div class="rounded-[10px] overflow-scroll">
    <a class="twitter-timeline" :href="src">Loading</a>
  </div>
</template>
