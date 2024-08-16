<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { GridLayout, type Breakpoint, type Breakpoints, type Layout } from 'grid-layout-plus'
import TitleWidget from '@/components/TitleWidget.vue'
import DebugWidget from '@/components/DebugWidget.vue'
import ImageWidget from '@/components/ImageWidget.vue'
import XTimelineWidget from '@/components/XTimelineWidget.vue'
import XPostWidget from '@/components/XPostWidget.vue'
import InstagramPostWidget from '@/components/InstagramPostWidget.vue'
import { WidgetType } from '../types'
import { THE_GRID_LAYOUT } from '../layout'
import TextWidget from '../components/TextWidget.vue'
import { useLocalStorage } from '@vueuse/core'

const storedCustomLayout = useLocalStorage('grid-layout', THE_GRID_LAYOUT)

const COL_NUM_LARGE = 4
const COL_NUM_SMALL = 2
const ROW_HEIGHT = 20

const gridOptions = reactive({
  draggable: false,
  resizable: false,
  responsive: true,
  onCustomizeClick: () => {
    showCustomizeModal.value = true
    customLayout.value = JSON.stringify(layout.value, null, 2)
  }
})

const cols: Breakpoints = {
  xxs: COL_NUM_SMALL,
  xs: COL_NUM_LARGE,
  sm: COL_NUM_LARGE,
  md: COL_NUM_LARGE,
  lg: COL_NUM_LARGE
}

const layout = ref(storedCustomLayout.value)
const showCustomizeModal = ref(false)
const customLayout = ref('')

// UGLY HACK => Need to deep dive into the grid-layout-plus source code
// to figure out why the layouts overlap.
// Or just calculate 2 col layouts manually based on the 4 col layout.
function breakpointChanged(_newBreakpoint: Breakpoint, _newLayout: Layout): void {
  gridOptions.draggable = !gridOptions.draggable
  gridOptions.draggable = !gridOptions.draggable
}

// function that checks if padding is needed
function needsPadding(type: WidgetType): boolean {
  if (type === WidgetType.TITLE || type === WidgetType.DEBUG) {
    return false
  }

  return true
}

function validateAndSaveLayout(newLayout: string): void {
  let parsedLayout: any
  try {
    parsedLayout = JSON.parse(newLayout)
  } catch (error) {
    alert('Invalid JSON 👿')

    return
  }

  if (
    !Array.isArray(parsedLayout) ||
    // check if object entries adhere to Widget interface
    !parsedLayout.every((item) => {
      return (
        typeof item.x === 'number' &&
        typeof item.y === 'number' &&
        typeof item.w === 'number' &&
        typeof item.h === 'number' &&
        typeof item.type === 'string' &&
        typeof item.properties === 'object'
      )
    })
  ) {
    alert('Invalid schema 😡')

    return
  }
  layout.value = parsedLayout
  storedCustomLayout.value = parsedLayout

  // close modal
  showCustomizeModal.value = false

  // save to local storage
  alert('Layout saved 🎉')
}

function resetLayout(): void {
  layout.value = THE_GRID_LAYOUT
  storedCustomLayout.value = THE_GRID_LAYOUT
}

onMounted(() => {
  gridOptions.draggable = !gridOptions.draggable
  gridOptions.draggable = !gridOptions.draggable
})
</script>

<style scoped>
/* .vgl-layout {
  background-color: #eee;
} */

:deep(.vgl-item:not(.vgl-item--placeholder)) {
  background-color: #ccc;
  border-radius: 12px;
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); */
}

:deep(.vgl-item--resizing) {
  opacity: 90%;
}

:deep(.vgl-item--static) {
  background-color: #cce;
}
</style>

<template>
  <main>
    <div class="mt-2 mx-auto max-w-content">
      <GridLayout
        v-model:layout="layout"
        :cols="cols"
        :row-height="ROW_HEIGHT"
        :is-draggable="gridOptions.draggable"
        :is-resizable="gridOptions.resizable"
        :responsive="gridOptions.responsive"
        @breakpoint-changed="breakpointChanged"
      >
        <template #item="{ item }">
          <div
            :class="
              'flex flex-col h-full rounded-xl shadow-2xl bg-white' +
              (needsPadding(item.type) ? ' p-2' : '')
            "
          >
            <TitleWidget
              v-if="item.type === WidgetType.TITLE"
              :title="item.properties.title"
              :bg-color="item.properties.bgColor"
            />
            <TextWidget
              v-if="item.type === WidgetType.TEXT"
              :title="item.properties.title"
              :text="item.properties.text"
              :bg-color="item.properties.bgColor"
            />
            <DebugWidget
              v-if="item.type === WidgetType.DEBUG"
              v-model="gridOptions"
              :layout="layout"
            />
            <ImageWidget v-if="item.type === WidgetType.IMAGE" :src="item.properties.src" />
            <iframe
              v-if="item.type === WidgetType.IFRAME"
              :src="item.properties.src"
              :title="item.properties.title"
              :allow="item.properties.allow"
              class="rounded-xl overflow-hidden"
              width="100%"
              height="100%"
              frameborder="0"
            ></iframe>
            <XPostWidget v-if="item.type === 'X_POST'" />
            <XTimelineWidget v-if="item.type === 'X_TIMELINE'" :src="item.properties.src" />
            <InstagramPostWidget v-if="item.type === 'INSTAGRAM_POST'" :src="item.properties.src" />
          </div>
        </template>
      </GridLayout>
    </div>
    <div>
      <lukso-modal
        :is-open="showCustomizeModal ? true : undefined"
        size="medium"
        @on-backdrop-click="showCustomizeModal = false"
      >
        <div class="flex flex-col m-4 align-middle justify-center">
          <div>Edit in IDE. Ensure JSON is valid. Read the code to understand the structure.</div>
          <div>Experiment. Go wild. YOLO. 😂👌</div>
          <textarea
            v-model="customLayout"
            class="w-full h-96 border-solid border-2 border-black"
          ></textarea>
          <span class="space-x-1">
            <lukso-button @click="validateAndSaveLayout(customLayout)" size="small">
              Apply
            </lukso-button>
            <lukso-button @click="resetLayout()" size="small"> Reset </lukso-button>
          </span>
        </div>
      </lukso-modal>
    </div>
  </main>
</template>
