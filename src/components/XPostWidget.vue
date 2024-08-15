<script setup lang="ts">
import { useScriptTag } from '@vueuse/core'

useScriptTag('https://platform.twitter.com/widgets.js')
</script>

<template>
  <div class="rounded-lg overflow-scroll">
    <blockquote class="twitter-tweet">
      <a href="https://twitter.com/ChiliPeppers/status/1821250605752656005?ref_src=twsrc%5Etfw"
        >Loading</a
      >
    </blockquote>
  </div>
</template>
