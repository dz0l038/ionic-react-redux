export const ADD_COLOR = 'ADD_COLOR'
export const DELETE_COLOR = 'DELETE_COLOR'

export interface Color {
    id: number
    user: string
    color: string
}

export interface ColorState {
    colors: Color[]
}

interface AddColorAction {
    type: typeof ADD_COLOR
    payload: string
}

interface DeleteColorAction {
    type: typeof DELETE_COLOR
    payload: number
}

export type ColorActionTypes = AddColorAction | DeleteColorAction