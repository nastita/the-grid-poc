<script setup lang="ts">
const model = defineModel({
  required: true,
  default: {
    draggable: false,
    resizable: false,
    responsive: false,
    onCustomizeClick: () => {}
  }
})

function onDraggableChange() {
  model.value.draggable = !model.value.draggable
}

function onResizableChange() {
  model.value.resizable = !model.value.resizable
}

function onResponsiveChange() {
  model.value.responsive = !model.value.responsive
}
</script>

<template>
  <div class="flex flex-col justify-center h-full p-2 bg-pink-95 rounded-xl space-y-2">
    <lukso-checkbox
      type="text"
      size="x-small"
      :checked="model.draggable.valueOf()"
      @click="onDraggableChange()"
    >
      Draggable
    </lukso-checkbox>
    <lukso-checkbox
      type="text"
      size="x-small"
      :checked="model.resizable.valueOf()"
      @click="onResizableChange()"
    >
      Resizable
    </lukso-checkbox>
    <lukso-checkbox
      type="text"
      size="x-small"
      :checked="model.responsive.valueOf()"
      @click="onResponsiveChange()"
    >
      Responsive
    </lukso-checkbox>
    <lukso-button size="small" type="text" :onclick="model.onCustomizeClick" class="text-blue-500"
      >👉 Customize
    </lukso-button>
  </div>
</template>
