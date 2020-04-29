import { combineReducers } from 'redux';
import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { colorsReducer } from './colors/reducer';

export const rootReducer = combineReducers({
    colors: colorsReducer
});

export type RootState = ReturnType<typeof rootReducer>

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
