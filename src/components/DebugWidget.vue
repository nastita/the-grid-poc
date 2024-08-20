<script setup lang="ts">
export interface DebugWidgetModel {
  draggable: boolean
  resizable: boolean
  responsive: boolean
  onCustomizeClick: () => void
  onAddWidgetClick: () => void
}

// TODO: there's a bug that causes the toggles to be out of sync with what is shown
const model = defineModel<DebugWidgetModel>({
  required: true,
  default: {
    draggable: false,
    resizable: false,
    responsive: true,
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
      :checked="model.draggable"
      @click="onDraggableChange()"
    >
      Draggable
    </lukso-checkbox>
    <lukso-checkbox
      type="text"
      size="x-small"
      :checked="model.resizable"
      @click="onResizableChange()"
    >
      Resizable
    </lukso-checkbox>
    <lukso-checkbox
      type="text"
      size="x-small"
      :checked="model.responsive"
      @click="onResponsiveChange()"
    >
      Responsive
    </lukso-checkbox>
    <div class="space-x-2">
      <lukso-button variant="primary" size="small" type="text" :onclick="model.onCustomizeClick">
        ⚙️ Customize
      </lukso-button>
      <lukso-button variant="primary" size="small" type="text" :onclick="model.onAddWidgetClick">
        🆕 Widget
      </lukso-button>
    </div>
  </div>
</template>
