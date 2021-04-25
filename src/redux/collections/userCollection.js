import * as ActionTypes from '../ActionTypes';

export const UserCollection = (state = {
    isLoading: true,
    errMess: null,
    user: {}
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_RESOURCES:
            return {...state, isLoading: false, errMess: null, user: action.payload}

        case ActionTypes.RESOURCES_LOADING:
            return {...state, isLoading: true, errMess: null, user: {}}

        case ActionTypes.RESOURCES_FAILED:
            return {...state, isLoading: false, errMess: action.payload, user: {}}

        default:
            return state;
    }
}
