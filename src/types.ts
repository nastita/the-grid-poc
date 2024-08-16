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
