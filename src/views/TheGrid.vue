<script setup lang="ts">
import { reactive, ref } from 'vue'
import { GridLayout } from 'grid-layout-plus'
import InstagramEmbed from '@/components/InstagramPost.vue'
import XPost from '@/components/XPost.vue'

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
      type: 'instagram_post',
      width: '100%',
      height: '100%'
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
      type: 'x_post',
      width: '100%',
      height: '100%'
    }
  }
])
</script>

<template>
  <main>
    <h1>The Grid</h1>
    <div class="layout-json">
      Displayed as <code>[x, y, w, h]</code>:
      <div class="columns">
        <div v-for="item in layout" :key="item.i">
          <strong>{{ item.i }}</strong
          >: [{{ item.x }}, {{ item.y }}, {{ item.w }}, {{ item.h }}]
        </div>
      </div>
    </div>
    <hr />
    <input v-model="draggable" type="checkbox" /> Draggable
    <input v-model="resizable" type="checkbox" /> Resizable
    <input v-model="responsive" type="checkbox" /> Responsive
    <br />
    <div style="margin-top: 10px">
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
          <InstagramEmbed v-if="item.data.type === 'instagram_post'" />
          <XPost v-if="item.data.type === 'x_post'" />
        </template>
      </GridLayout>
    </div>
  </main>
</template>

<style scoped>
.vgl-layout {
  background-color: #eee;
}

:deep(.vgl-item:not(.vgl-item--placeholder)) {
  background-color: #ccc;
  border: 1px solid black;
}

:deep(.vgl-item--resizing) {
  opacity: 90%;
}

:deep(.vgl-item--static) {
  background-color: #cce;
}

.text {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  margin: auto;
  font-size: 24px;
  text-align: center;
}

.layout-json {
  padding: 10px;
  margin-top: 10px;
  background-color: #ddd;
  border: 1px solid black;
}

.columns {
  columns: 120px;
}
</style>
