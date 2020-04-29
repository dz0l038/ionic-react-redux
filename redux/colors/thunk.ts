import { Action } from 'redux'
import { addColor } from './actions'
import { RootState } from './../store'
import { ThunkAction } from 'redux-thunk'

export const thunkAddColor = (
    color: string
): ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
    const asyncResp = await exampleAPI(color)
    dispatch(
        addColor(asyncResp)
    )
}

function exampleAPI(color: string) {
    return Promise.resolve(color)
}