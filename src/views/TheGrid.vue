<script setup lang="ts">
import { reactive } from 'vue'
import { GridLayout } from 'grid-layout-plus'

const layout = reactive([
  {
    x: 0,
    y: 0,
    w: 6,
    h: 10,
    i: '0',
    static: false,
    data: {
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
    x: 6,
    y: 0,
    w: 6,
    h: 10,
    i: '1',
    static: false,
    data: {
      width: '100%',
      height: '100%',
      src: 'https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO0nT692?utm_source=generator',
      title: 'Spotify playlist',
      frameborder: '0',
      allow: 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
    }
  }
])
</script>

<template>
  <main>
    <h1>The Grid</h1>
    <GridLayout v-model:layout="layout" :row-height="30">
      <template #item="{ item }">
        <iframe
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
</style>
