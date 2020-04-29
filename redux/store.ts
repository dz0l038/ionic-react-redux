import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';


export interface RootState {
    colors: Array<string>
}

export default function configureStore() {
    return createStore(
        rootReducer,
        composeWithDevTools(
            applyMiddleware(thunk),
        )
    );
}