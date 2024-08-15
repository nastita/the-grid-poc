<script setup lang="ts">
import { reactive, ref } from 'vue'
import { GridLayout } from 'grid-layout-plus'
import TitleWidget from '@/components/TitleWidget.vue'
import GridInfoWidget from '@/components/GridInfoWidget.vue'
import MediaWidget from '@/components/MediaWidget.vue'

const COL_NUM = 8
const ROW_HEIGHT = 10

const gridOptions = reactive({
  draggable: false,
  resizable: false,
  responsive: false
})

const layout = reactive([
  {
    x: 0,
    y: 0,
    w: 2,
    h: 8,
    i: '0',
    static: false,
    data: {
      type: 'title',
      title: 'The Grid'
    }
  },
  {
    x: 0,
    y: 8,
    w: 3,
    h: 9,
    i: '6',
    static: false,
    data: {
      type: 'media',
      title: 'pic',
      url: 'https://www.udiscovermusic.com/wp-content/uploads/2021/09/Red-Hot-Chili-Peppers-GettyImages-535925590-2.jpg'
    }
  },
  {
    x: 2,
    y: 0,
    w: 6,
    h: 8,
    i: '1',
    static: false,
    data: {
      type: 'grid-info'
    }
  },
  {
    x: 3,
    y: 8,
    w: 5,
    h: 20,
    i: '2',
    static: false,
    data: {
      type: 'iframe',
      width: '100%',
      height: '100%',
      src: 'https://www.youtube.com/embed/E1FNkf3MLKY?si=2fWw28HI1xtv8_wA',
      title: 'YouTube video player',
      frameborder: '0',
      allow:
        'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
      referrerpolicy: 'strict-origin-when-cross-origin'
    }
  },
  {
    x: 3,
    y: 35,
    w: 5,
    h: 31,
    i: '3',
    static: false,
    data: {
      type: 'iframe',
      width: '100%',
      height: '100%',
      src: 'https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO0nT692?utm_source=generator',
      title: 'Spotify playlist',
      frameborder: '0',
      allow: 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
    }
  },
  {
    x: 0,
    y: 20,
    w: 3,
    h: 22,
    i: '4',
    static: false,
    data: {
      type: 'iframe',
      width: '100%',
      height: '100%',
      src: 'https://www.instagram.com/reel/C4DnYdFLS9x/embed',
      title: 'Instagram post',
      frameborder: '0'
    }
  },
  {
    x: 0,
    y: 39,
    w: 3,
    h: 29,
    i: '5',
    static: false,
    data: {
      type: 'iframe',
      width: '100%',
      height: '100%',
      src: 'https://twitframe.com/show?url=https://twitter.com/ChiliPeppers/status/1821250605752656005',
      title: 'Twitter post',
      frameborder: '0'
    }
  },
  {
    x: 3,
    y: 26,
    w: 5,
    h: 9,
    i: '7',
    static: false,
    data: {
      type: 'media',
      url: 'https://iconic.collectionzz.com/cdn/shop/collections/RHCP-COLLECTION-1920X500.png?v=1704679934&width=2048'
    }
  }
])

// function that checks if padding is needed
function needsPadding(type: string): boolean {
  if (type === 'title' || type === 'grid-info' || type === 'media') {
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
    <div class="mt-2 mx-auto lg:w-3/4 xl:w-2/3">
      <GridLayout
        v-model:layout="layout"
        :col-num="COL_NUM"
        :row-height="ROW_HEIGHT"
        :is-draggable="gridOptions.draggable"
        :is-resizable="gridOptions.resizable"
        :responsive="gridOptions.responsive"
      >
        <template #item="{ item }">
          <div
            :class="
              'flex flex-col h-full rounded-xl shadow-xl bg-white' +
              (needsPadding(item.data.type) ? ' p-4' : '')
            "
          >
            <TitleWidget v-if="item.data.type === 'title'" :title="item.data.title" />
            <GridInfoWidget
              v-if="item.data.type === 'grid-info'"
              v-model="gridOptions"
              :layout="layout"
            />
            <MediaWidget v-if="item.data.type === 'media'" :url="item.data.url" />
            <iframe
              v-if="item.data.type === 'iframe'"
              class="rounded-xl overflow-hidden"
              :src="item.data.src"
              :width="item.data.width"
              :height="item.data.height"
              :title="item.data.title"
              :frameborder="item.data.frameborder"
              :allow="item.data.allow"
            ></iframe>
          </div>
        </template>
      </GridLayout>
    </div>
  </main>
</template>
