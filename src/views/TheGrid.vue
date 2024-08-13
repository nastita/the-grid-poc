<script setup lang="ts">
import { reactive, ref } from 'vue'
import { GridLayout } from 'grid-layout-plus'

const draggable = ref(true)
const resizable = ref(false)
const responsive = ref(true)

const layout = reactive([
  {
    x: 3,
    y: 0,
    w: 5,
    h: 20,
    i: '0',
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
    y: 20,
    w: 5,
    h: 19,
    i: '1',
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
    y: 0,
    w: 3,
    h: 27,
    i: '2',
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
    x: 8,
    y: 0,
    w: 3,
    h: 31,
    i: '3',
    static: false,
    data: {
      type: 'iframe',
      width: '100%',
      height: '100%',
      src: 'https://twitframe.com/show?url=https://twitter.com/ChiliPeppers/status/1821250605752656005',
      title: 'Twitter post',
      frameborder: '0'
    }
  }
])
</script>

<style scoped>
/* .vgl-layout {
  background-color: #eee;
} */

:deep(.vgl-item:not(.vgl-item--placeholder)) {
  background-color: #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
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
    <lukso-card variant="with-header" border-radius="small" shadow="medium">
      <div slot="header" class="p-2 text-center">
        <h1 className="text-xl font-bold underline">The Grid</h1>
      </div>
      <div slot="content" class="p-2">
        <p>
          Help me make this less shitty @
          <a
            class="underline text-blue-500"
            :href="'https://github.com/nastita/vue-cool-grid-stuff'"
            >vue-cool-grid-stuff</a
          >
        </p>
        <div class="p-2 border-black border-solid">
          Displayed as <code>[x, y, w, h]</code>:
          <div class="columns-8">
            <div v-for="item in layout" :key="item.i">
              <strong>{{ item.i }}</strong
              >: [{{ item.x }}, {{ item.y }}, {{ item.w }}, {{ item.h }}]
            </div>
          </div>
        </div>
        <div class="mt-2">
          <input v-model="draggable" type="checkbox" /> Draggable
          <input v-model="resizable" type="checkbox" /> Resizable
          <input v-model="responsive" type="checkbox" /> Responsive
        </div>
      </div>
    </lukso-card>

    <div class="mt-2">
      <GridLayout
        v-model:layout="layout"
        :row-height="10"
        :is-draggable="draggable"
        :is-resizable="resizable"
        :responsive="responsive"
      >
        <template #item="{ item }">
          <iframe
            v-if="item.data.type === 'iframe'"
            :src="item.data.src"
            :width="item.data.width"
            :height="item.data.height"
            :title="item.data.title"
            :frameborder="item.data.frameborder"
            :allow="item.data.allow"
            :referrerpolicy="item.data.referrerpolicy"
          ></iframe>
        </template>
      </GridLayout>
    </div>
  </main>
</template>
