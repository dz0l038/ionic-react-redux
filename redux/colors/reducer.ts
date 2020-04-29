import {
    ColorState,
    ColorActionTypes,
    ADD_COLOR,
    DELETE_COLOR,
    Color
} from './types'

const initialState: Color[] =
    [
        {
            id: 1,
            user: 'Yann',
            color: 'Rouge'
        },
        {
            id: 2,
            user: 'Yann',
            color: 'Blanc'
        }
    ]

export function colorsReducer(
    state = initialState,
    action: ColorActionTypes
): Color[] {
    switch (action.type) {
        case ADD_COLOR:
            const newColor = {
                id: 3,
                user: 'Yann',
                color: action.payload,
            };
            return [...state, newColor]
        case DELETE_COLOR:
            return state
        default:
            return state
    }
}