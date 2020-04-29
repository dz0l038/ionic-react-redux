import { Color, ADD_COLOR, DELETE_COLOR, ColorActionTypes } from './types'

export function addColor(newColor: string): ColorActionTypes {
  return {
    type: ADD_COLOR,
    payload: newColor
  }
}

export function deleteColor(colorId: number): ColorActionTypes {
  return {
    type: DELETE_COLOR,
    payload: colorId
  }
}