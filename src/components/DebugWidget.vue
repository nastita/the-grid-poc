<script setup lang="ts">
import type { Widget } from '../types'

const model = defineModel({
  required: true,
  default: {
    draggable: false,
    resizable: false,
    responsive: false,
    onCustomizeClick: () => {}
  }
})

defineProps<{
  layout: Widget[]
}>()
</script>
  
<template>
  <div class="flex flex-col h-full p-2 bg-pink-95 rounded-xl overflow-scroll text-xs">
    Displayed as [x, y, w, h]:
    <div class="mt-1 columns-4">
      <div v-for="(item, index) in layout" :key="index">
        <strong>{{ index }}</strong
        >: [{{ item.x }}, {{ item.y }}, {{ item.w }}, {{ item.h }}]
      </div>
    </div>
    <div class="mt-1">
      Debug options:
      <input v-model="model.draggable" type="checkbox" /> Draggable
      <input v-model="model.resizable" type="checkbox" /> Resizable
      <input v-model="model.responsive" type="checkbox" /> Responsive
      <button :onclick="model.onCustomizeClick" class="text-blue-500">👉 Customize</button>
    </div>
    <p class="mt-1">
      Help make The Grid great @
      <a class="underline text-blue-500" :href="'https://github.com/nastita/vue-cool-grid-stuff'"
        >vue-cool-grid-stuff</a
      >
    </p>
  </div>
</template>
