import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {reducer} from './../reducers'

const initialState = {
    countries: [],
    visitors: [],
    show: ""
}

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;
    
export const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
)