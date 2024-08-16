<script setup lang="ts">
import { reactive } from 'vue'
import { GridLayout, type Breakpoint, type Breakpoints, type Layout } from 'grid-layout-plus'
import TitleWidget from '@/components/TitleWidget.vue'
import GridInfoWidget from '@/components/GridInfoWidget.vue'
import ImageWidget from '@/components/ImageWidget.vue'
import XTimelineWidget from '@/components/XTimelineWidget.vue'
import XPostWidget from '@/components/XPostWidget.vue'
import InstagramPostWidget from '@/components/InstagramPostWidget.vue'
import { WidgetType } from '../types'
import { THE_GRID_LAYOUT } from '../layout'

const COL_NUM_LARGE = 4
const COL_NUM_SMALL = 2
const ROW_HEIGHT = 20

const gridOptions = reactive({
  draggable: false,
  resizable: false,
  responsive: true
})

const cols: Breakpoints = {
  xxs: COL_NUM_SMALL,
  xs: COL_NUM_LARGE,
  sm: COL_NUM_LARGE,
  md: COL_NUM_LARGE,
  lg: COL_NUM_LARGE
}

const layout = reactive(THE_GRID_LAYOUT)

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
              'flex flex-col h-full rounded-xl shadow-xl bg-white' +
              (needsPadding(item.type) ? ' p-2' : '')
            "
          >
            <TitleWidget v-if="item.type === WidgetType.TITLE" :title="item.properties.title" />
            <GridInfoWidget
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
  </main>
</template>
