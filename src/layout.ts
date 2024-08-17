import { WidgetSize, WidgetType, type Widget } from './types';

export const THE_GRID_LAYOUT: Widget[] = [
  {
    "x": 0,
    "y": 0,
    "w":  WidgetSize.SMALL,
    "h": 6,
    "i": "1",
    "type": WidgetType.TITLE,
    "properties": {
      "title": "The Grid 🍱",
      "bgColor": "bg-purple-58"
    },
    "moved": false
  },
  {
    "x": 3,
    "y": 0,
    "w":  WidgetSize.SMALL,
    "h": 6,
    "i": "2",
    "type": WidgetType.DEBUG,
    "properties": {},
    "moved": false
  },
  {
    "x": 1,
    "y": 0,
    "w":  WidgetSize.MEDIUM,
    "h": 6,
    "i": "3",
    "type": WidgetType.IMAGE,
    "properties": {
      "title": "pic",
      "src": "https://www.udiscovermusic.com/wp-content/uploads/2021/09/Red-Hot-Chili-Peppers-GettyImages-535925590-2.jpg"
    },
    "moved": false
  },
  {
    "x": 2,
    "y": 14,
    "w":  WidgetSize.MEDIUM,
    "h": 9,
    "i": "4",
    "type": WidgetType.IFRAME,
    "properties": {
      "src": "https://www.youtube.com/embed/E1FNkf3MLKY?si=2fWw28HI1xtv8_wA",
      "title": "YouTube video player",
      "allow": "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      "referrerpolicy": "strict-origin-when-cross-origin"
    },
    "moved": false
  },
  {
    "x": 2,
    "y": 45,
    "w":  WidgetSize.MEDIUM,
    "h": 16,
    "i": "5",
    "type": WidgetType.IFRAME,
    "properties": {
      "src": "https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO0nT692?utm_source=generator",
      "title": "Spotify playlist",
      "allow": "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    },
    "moved": false
  },
  {
    "x": 0,
    "y": 36,
    "w":  WidgetSize.MEDIUM,
    "h": 19,
    "i": "6",
    "type": WidgetType.INSTAGRAM_POST,
    "properties": {
      "src": "https://www.instagram.com/reel/C4DnYdFLS9x"
    },
    "moved": false
  },
  {
    "x": 0,
    "y": 14,
    "w":  WidgetSize.MEDIUM,
    "h": 22,
    "i": "7",
    "type": WidgetType.X_POST,
    "properties": {
      "width": "100%",
      "height": "100%",
      "src": "https://twitframe.com/show?url=https://twitter.com/ChiliPeppers/status/1821250605752656005",
      "title": "Twitter post",
      "frameborder": "0"
    },
    "moved": false
  },
  {
    "x": 0,
    "y": 6,
    "w":  WidgetSize.FULL,
    "h": 8,
    "i": "8",
    "type": WidgetType.IMAGE,
    "properties": {
      "src": "https://iconic.collectionzz.com/cdn/shop/collections/RHCP-COLLECTION-1920X500.png?v=1704679934&width=2048"
    },
    "moved": false
  },
  {
    "x": 2,
    "y": 23,
    "w":  WidgetSize.MEDIUM,
    "h": 22,
    "i": "9",
    "type": WidgetType.X_TIMELINE,
    "properties": {
      "src": "https://twitter.com/ChiliPeppers"
    },
    "moved": false
  },
  {
    "x": 0,
    "y": 55,
    "w":  WidgetSize.MEDIUM,
    "h": 16,
    "i": "10",
    "type": WidgetType.IFRAME,
    "properties": {
      "src": "https://warpcast.com/vitalik.eth",
      "title": "Vitalik.eth",
      "allow": "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    },
    "moved": false
  },
  {
    "x": 2,
    "y": 61,
    "w":  WidgetSize.MEDIUM,
    "h": 8,
    "i": "11",
    "type": WidgetType.TEXT,
    "properties": {
      "title": "Nasta",
      "text": "This is my dog Nastita. Best dog ever!",
      "bgColor": "bg-sea-salt-67"
    },
    "moved": false
  },
  {
    "x": 2,
    "y": 69,
    "w":  WidgetSize.SMALL,
    "h": 8,
    "i": "12",
    "type": WidgetType.IMAGE,
    "properties": {
      "src": "https://avatars.githubusercontent.com/u/3680995?v=4"
    },
    "moved": false
  },
  {
    "x": 3,
    "y": 69,
    "w":  WidgetSize.SMALL,
    "h": 8,
    "i": "13",
    "type": WidgetType.TITLE,
    "properties": {
      "title": "By Ed with ♥️ ",
      "bgColor": "bg-lukso-80"
    },
    "moved": false
  }
];
