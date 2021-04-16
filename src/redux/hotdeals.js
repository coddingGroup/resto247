
import * as ActionTypes from './ActionTypes';

export const Hotdeals= (state = {
    isLoading: true,
    errMess: null,
    hotdeals: []
}, action) => {
switch (action.type) {
    case ActionTypes.ADD_HOTDEALS:
        return { ...state, isLoading: false, errMess: null, hotdeals: action.payload }

    case ActionTypes.HOTDEALS_LOADING:
        return { ...state, isLoading: true, errMess: null, hotdeals: [] }

    case ActionTypes.HOTDEALS_FAILED:
        return { ...state, isLoading: false, errMess: action.payload, hotdeals: [] }

    default:
        return state;
    }
}