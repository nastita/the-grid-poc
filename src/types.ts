import type { LayoutItem } from 'grid-layout-plus';

export interface Widget extends LayoutItem {
  type: WidgetType;
  properties?: Record<string, any>; //TODO: should be typed based on type
}

// TODO: calculate w and h based on size
export enum WidgetSize {
  SMALL = 1, // 1 column, should resize to 2 if not able to fill the row
  MEDIUM = 2, // 2 columns
  LARGE = 3, // 3 columns resizes to 2 columns on mobile
  FULL = 4, // 4 columns resizes to 2 columns on mobile
}

export enum WidgetType {
  TITLE = 'TITLE',
  TEXT = 'TEXT',
  X_POST = 'X_POST',
  X_TIMELINE = 'X_TIMELINE',
  INSTAGRAM_POST = 'INSTAGRAM_POST',
  IFRAME = 'IFRAME',
  IMAGE = 'IMAGE',
  DEBUG = 'DEBUG',
}

export interface Property {
  key: string;
  type: 'string' | 'number' | 'boolean' | 'color' | 'url';
  optional?: boolean;
}

// To programatically generate the form based on the widget type
// Should we add placeholder or default value
export const WIDGET_TYPE_PROPERTIES: Record<WidgetType, Property[]> = {
  [WidgetType.TITLE]: [
    { key: 'title', type: 'string' },
    { key: 'bgColor', type: 'color', optional: true },
  ],
  [WidgetType.TEXT]: [
    { key: 'title', type: 'string' },
    { key: 'text', type: 'string' },
    { key: 'bgColor', type: 'color', optional: true },
  ],
  [WidgetType.X_POST]: [
    { key: 'src', type: 'string' },
  ],
  [WidgetType.X_TIMELINE]: [
    { key: 'src', type: 'url' },
  ],
  [WidgetType.INSTAGRAM_POST]: [],
  [WidgetType.IFRAME]: [
    { key: 'src', type: 'url' },
    { key: 'title', type: 'string' },
    { key: 'allow', type: 'string' },
  ],
  [WidgetType.IMAGE]: [
    { key: 'src', type: 'url' },
  ],
  [WidgetType.DEBUG]: [],
};
