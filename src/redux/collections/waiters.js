import * as ActionTypes from '../ActionTypes';

export const Waiters = (state = {
    isLoading: true,
    errMess: null,
    waiters: []
}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_WAITERS:
            return {...state, isLoading: false, errMess: null, waiters: action.payload};

        case ActionTypes.WAITERS_LOADING:
            return {...state, isLoading: true, errMess: null, waiters: []};

        case ActionTypes.WAITERS_FAILURE:
            return {...state, isLoading: false, errMess: action.payload, waiters: []};

        default:
            return state;
    }
}