<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { GridLayout, type Breakpoint, type Breakpoints, type Layout } from 'grid-layout-plus'
import TitleWidget from '@/components/TitleWidget.vue'
import DebugWidget from '@/components/DebugWidget.vue'
import ImageWidget from '@/components/ImageWidget.vue'
import XTimelineWidget from '@/components/XTimelineWidget.vue'
import XPostWidget from '@/components/XPostWidget.vue'
import InstagramPostWidget from '@/components/InstagramPostWidget.vue'
import { WidgetType } from '../types'
import { getNewUserLayout, isValidLayout, SHOWCASE_LAYOUT } from '../layout'
import TextWidget from '../components/TextWidget.vue'
import { getGridConfig, upsertGridConfig } from '../helpers/grid-config'

const COL_NUM_LARGE = 4
const COL_NUM_SMALL = 2
const ROW_HEIGHT = 20

const cols: Breakpoints = {
  xxs: COL_NUM_SMALL,
  xs: COL_NUM_LARGE,
  sm: COL_NUM_LARGE,
  md: COL_NUM_LARGE,
  lg: COL_NUM_LARGE
}

const gridOptions = reactive({
  draggable: false,
  resizable: false,
  responsive: true,
  onCustomizeClick: () => {
    showCustomizeModal.value = true
    layoutStringified.value = JSON.stringify(layout.value, null, 2)
  }
})

const layout = ref(SHOWCASE_LAYOUT)
const showCustomizeModal = ref(false)
const layoutStringified = ref('')

// Load the layout based on the route id
const route = useRoute()
const username = Array.isArray(route.params.username)
  ? route.params.username[0]
  : route.params.username
watch(
  () => route.params.id,
  () => {
    initializeTheGrid(username)
  },
  { immediate: true }
)

async function initializeTheGrid(userId: string | undefined): Promise<void> {
  if (!userId) {
    layout.value = SHOWCASE_LAYOUT
    return
  }

  // check if there's an existing layout for the user
  const gridConfigObject = await getGridConfig(userId)
  if (!gridConfigObject) {
    layout.value = getNewUserLayout(userId)

    return
  }

  // check if the config is valid
  if (!isValidLayout(gridConfigObject.config)) {
    alert('Saved layout is invalid. Resetting to default layout.')
    layout.value = getNewUserLayout(userId)

    return
  }

  layout.value = getNewUserLayout(userId)
}

// UGLY HACK => Need to deep dive into the grid-layout-plus source code
// to figure out why the layouts overlap.
// Or just calculate 2 col layouts manually based on the 4 col layout.
function triggerLayoutRefresh(): void {
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

async function validateAndSaveLayout(newLayout: string): Promise<void> {
  let parsedLayout: any
  try {
    parsedLayout = JSON.parse(newLayout)
  } catch (error) {
    alert('Invalid JSON 👿')

    return
  }

  if (!isValidLayout(parsedLayout)) {
    alert('Invalid schema 😡')

    return
  }

  layout.value = parsedLayout

  // close modal
  showCustomizeModal.value = false

  const response = await upsertGridConfig(username, layout.value)
  if (!response) {
    alert('Failed to save layout 😢')

    return
  }

  alert('Layout saved 🎉')
}

function resetLayout(): void {
  // close modal
  showCustomizeModal.value = false

  layout.value = SHOWCASE_LAYOUT
  // storedCustomLayout.value = THE_GRID_LAYOUT
}

function breakpointChanged(_newBreakpoint: Breakpoint, _newLayout: Layout): void {
  triggerLayoutRefresh()
}

onMounted(() => {
  triggerLayoutRefresh()
})
</script>

<style scoped>
.grid-item {
  background: rgba(red, green, blue, alpha);
  border-radius: 10px;
  border: 1px solid #e4e2e2a3;
  backdrop-filter: blur(4px);
  box-shadow: 0 0 10px #0003;
}
</style>

<template>
  <main class="h-screen bg-hero bg-cover bg-fixed">
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
            :class="'flex flex-col h-full grid-item  ' + (needsPadding(item.type) ? ' p-2' : '')"
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
            <DebugWidget v-if="item.type === WidgetType.DEBUG" v-model="gridOptions" />
            <ImageWidget v-if="item.type === WidgetType.IMAGE" :src="item.properties.src" />
            <iframe
              v-if="item.type === WidgetType.IFRAME"
              :src="item.properties.src"
              :title="item.properties.title"
              :allow="item.properties.allow"
              class="rounded-[10px] overflow-hidden"
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
        size="full"
        @on-backdrop-click="showCustomizeModal = false"
      >
        <div class="flex flex-col m-4 space-y-2 text-sm">
          <div>
            Current items info as i: [x, y, w, h]:
            <div class="columns-4">
              <div v-for="item in layout" :key="item.i">
                <strong>{{ item.i }}</strong
                >: [{{ item.x }}, {{ item.y }}, {{ item.w }}, {{ item.h }}]
              </div>
            </div>
          </div>
          <p>
            Edit in IDE. Ensure JSON is valid. Read the code to understand the structure. Go wild.
            YOLO SWAGGINS. 😂👌
          </p>
          <textarea
            v-model="layoutStringified"
            class="w-full h-96 border-solid border-2 border-black"
            wrap="off"
          ></textarea>
          <span class="space-x-2">
            <lukso-button @click="validateAndSaveLayout(layoutStringified)" size="small">
              Apply
            </lukso-button>
            <lukso-button @click="resetLayout()" size="small"> Reset </lukso-button>
          </span>
          <p>
            Help make The Grid great @
            <a
              class="underline text-blue-500"
              :href="'https://github.com/nastita/vue-cool-grid-stuff'"
              >vue-cool-grid-stuff</a
            >
          </p>
        </div>
      </lukso-modal>
    </div>
  </main>
</template>
