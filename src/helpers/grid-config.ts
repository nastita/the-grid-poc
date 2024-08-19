import Parse from 'parse'
import type { Widget } from '../types'

Parse.initialize(import.meta.env.VITE_X_PARSE_APPLICATION_ID, import.meta.env.VITE_X_PARSE_JS_KEY)
Parse.serverURL = import.meta.env.VITE_X_PARSE_SERVER_URL

export interface GetGridConfigResponse {
  objectId: string
  config: Widget[]
}

export interface UpsertGridConfigResponse {
  objectId: string
  createdAt?: string
  updatedAt?: string
}

export async function getGridConfig(username: string): Promise<GetGridConfigResponse | undefined> {
  const query: Parse.Query = new Parse.Query('grid_config')
  query.equalTo('username', username)

  try {
    const object = await query.first()

    if (!object) {
      return
    }

    return {
      objectId: object.id,
      config: object?.get('config')
    }

  } catch (error: any) {
    console.error('Error while fetching grid_config', error)
  }
}

export async function upsertGridConfig(
  username: string,
  config: Widget[]
): Promise<UpsertGridConfigResponse | undefined> {
  const query: Parse.Query = new Parse.Query('grid_config')
  query.equalTo('username', username)

  try {
    let object = await query.first()

    if (!object) {
      object = new Parse.Object('grid_config')
    }

    object.set('config', config)
    object.set('username', username)

    try {
      const response = await object.save()

      return {
        objectId: response.id,
        createdAt: response.get('createdAt'),
        updatedAt: response.get('updatedAt')
      }
    } catch (error: any) {
      console.error('Error while updating grid_config', error)
    }
  } catch (error: any) {
    console.error('Error while retrieving object grid_config', error)
  }
}
