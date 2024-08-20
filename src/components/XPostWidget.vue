<script setup lang="ts">
import { useScriptTag } from '@vueuse/core'
defineProps<{
  src: string
}>()

useScriptTag('https://platform.twitter.com/widgets.js')
</script>

<template>
  <div class="rounded-lg overflow-scroll">
    <blockquote class="twitter-tweet">
      <a :href="src">Loading</a>
    </blockquote>
  </div>
</template>
