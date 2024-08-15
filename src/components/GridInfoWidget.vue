<script setup lang="ts">
import { defineProps } from 'vue'

const model = defineModel({
  required: true,
  default: {
    draggable: false,
    resizable: false,
    responsive: false
  }
})

defineProps<{
  layout: {
    x: number
    y: number
    w: number
    h: number
    i: string
  }[]
}>()
</script>

<template>
  <div class="flex flex-col h-full p-4 bg-pink-95 rounded-xl overflow-hidden text-sm">
    Displayed as [x, y, w, h]:
    <div class="columns-4">
      <div v-for="item in layout" :key="item.i">
        <strong>{{ item.i }}</strong
        >: [{{ item.x }}, {{ item.y }}, {{ item.w }}, {{ item.h }}]
      </div>
    </div>
    <div class="mt-2">
      <input v-model="model.draggable" type="checkbox" /> Draggable
      <input v-model="model.resizable" type="checkbox" /> Resizable
      <input v-model="model.responsive" type="checkbox" /> Responsive
    </div>
    <p class="mt-1 text-xs">
      Help make The Grid great @
      <a class="underline text-blue-500" :href="'https://github.com/nastita/vue-cool-grid-stuff'"
        >vue-cool-grid-stuff</a
      >
    </p>
  </div>
</template>
