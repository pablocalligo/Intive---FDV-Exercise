import {SET_VISITORS, SET_SHOW} from './../actions'

export const reducer = (state,action) => {
    switch (action.type){
        case SET_VISITORS:
            return {...state, visitors: action.payload}
        case SET_SHOW:
            return {...state, show: action.payload}
        case "REQUEST_SUCCEEDED":
            return {...state, countries:action.payload}
        case "REQUEST_FAILED":
            return state
        default:
            return state
    }
}