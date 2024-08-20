import { WidgetSize, WidgetType, type Widget } from './types';

export const SHOWCASE_LAYOUT: Widget[] = [
  {
    "x": 0,
    "y": 0,
    "w": 4,
    "h": 19,
    "i": "mock",
    "type": "IMAGE",
    "properties": {
      "title": "mockup",
      "src": "https://i.postimg.cc/44bQFFxM/mock.png"
    },
  },
  {
    "x": 0,
    "y": 19,
    "w": 1,
    "h": 6,
    "i": "1",
    "type": "TITLE",
    "properties": {
      "title": "The Grid 🍱",
      "bgColor": "bg-purple-58"
    },
    
  },
  {
    "x": 3,
    "y": 19,
    "w": 1,
    "h": 6,
    "i": "2",
    "type": "DEBUG",
    "properties": {},
  },
  {
    "x": 1,
    "y": 19,
    "w": 2,
    "h": 6,
    "i": "3",
    "type": "IMAGE",
    "properties": {
      "title": "pic",
      "src": "https://www.udiscovermusic.com/wp-content/uploads/2021/09/Red-Hot-Chili-Peppers-GettyImages-535925590-2.jpg"
    },
  },
  {
    "x": 2,
    "y": 33,
    "w": 2,
    "h": 9,
    "i": "4",
    "type": "IFRAME",
    "properties": {
      "src": "https://www.youtube.com/embed/E1FNkf3MLKY?si=2fWw28HI1xtv8_wA",
      "title": "YouTube video player",
      "allow": "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      "referrerpolicy": "strict-origin-when-cross-origin"
    },
  },
  {
    "x": 2,
    "y": 64,
    "w": 2,
    "h": 16,
    "i": "5",
    "type": "IFRAME",
    "properties": {
      "src": "https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO0nT692?utm_source=generator",
      "title": "Spotify playlist",
      "allow": "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    },
  },
  {
    "x": 0,
    "y": 55,
    "w": 2,
    "h": 19,
    "i": "6",
    "type": "INSTAGRAM_POST",
    "properties": {
      "src": "https://www.instagram.com/reel/C4DnYdFLS9x"
    },
  },
  {
    "x": 0,
    "y": 33,
    "w": 2,
    "h": 22,
    "i": "7",
    "type": "X_POST",
    "properties": {
      "src": "https://twitter.com/ChiliPeppers/status/1821250605752656005",
      "title": "Twitter post",
    },
  },
  {
    "x": 0,
    "y": 25,
    "w": 4,
    "h": 8,
    "i": "8",
    "type": "IMAGE",
    "properties": {
      "src": "https://iconic.collectionzz.com/cdn/shop/collections/RHCP-COLLECTION-1920X500.png?v=1704679934&width=2048"
    },
    
  },
  {
    "x": 2,
    "y": 42,
    "w": 2,
    "h": 22,
    "i": "9",
    "type": "X_TIMELINE",
    "properties": {
      "src": "https://twitter.com/ChiliPeppers"
    },
  },
  {
    "x": 0,
    "y": 74,
    "w": 2,
    "h": 16,
    "i": "10",
    "type": "IFRAME",
    "properties": {
      "src": "https://warpcast.com/vitalik.eth",
      "title": "Vitalik.eth",
      "allow": "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    },
  },
  {
    "x": 2,
    "y": 80,
    "w": 2,
    "h": 8,
    "i": "11",
    "type": "TEXT",
    "properties": {
      "title": "Nasta",
      "text": "This is my dog Nastita. Best dog ever!",
      "bgColor": "bg-sea-salt-67"
    },
  },
  {
    "x": 2,
    "y": 88,
    "w": 1,
    "h": 8,
    "i": "12",
    "type": "IMAGE",
    "properties": {
      "src": "https://avatars.githubusercontent.com/u/3680995?v=4"
    },
  },
  {
    "x": 3,
    "y": 88,
    "w": 1,
    "h": 8,
    "i": "13",
    "type": "TITLE",
    "properties": {
      "title": "By Ed with ♥️ ",
      "bgColor": "bg-lukso-80"
    },
  }
] as Widget[]; // Sorry didn't have time to use the enums

export function getNewUserLayout(id: string): Widget[] {
  return [
    { i: '1', x: 0, y: 0, w: 2, h: 6, type: WidgetType.TITLE, properties: { title: id, bgColor: "bg-purple-58" } },
    {
      i: '2',
      x: 2,
      y: 1,
      w: 2,
      h: 6,
      type: WidgetType.TEXT,
      properties: { title: 'Text', text: 'Text', bgColor: 'bg-sea-salt-67' }
    },
    {
      i: '3',
      x: 0,
      y: 2,
      w: 1,
      h: 7,
      type: WidgetType.IMAGE,
      properties: { src: 'https://via.placeholder.com/150' }
    },
    {
      // Add the debug widget
      i: '4',
      x: 1,
      y: 2,
      w: 1,
      h: 7,
      type: WidgetType.DEBUG,
      properties: {}
    }
  ];
}

export function isValidLayout(layout: Widget[]): boolean {
  // We can make the validations even better with Zod or some other library
  if (!Array.isArray(layout) ||
  // check if object entries adhere to Widget interface
  !layout.every((item) => {
    return (
      typeof item.x === 'number' &&
      typeof item.y === 'number' &&
      typeof item.w === 'number' &&
      typeof item.h === 'number' &&
      typeof item.type === 'string' &&
      typeof item.properties === 'object'
    )
  }))
  {
    return false;
  }

  return true;
}
