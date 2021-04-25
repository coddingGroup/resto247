import * as ActionTypes from '../ActionTypes';

export const UserCollection = (state = {
    isLoading: true,
    errMess: null,
    user: JSON.parse(localStorage.getItem('user'))
}, action) => {
    switch (action.type) {
        case ActionTypes.SET_USER:
            return {...state, isLoading: false, errMess: null, user: action.payload}

        case ActionTypes.SET_USER_LOADING:
            return {...state, isLoading: true, errMess: null, user: {}}

        case ActionTypes.SET_USER_FAILED:
            return {...state, isLoading: false, errMess: action.payload, user: {}}

        default:
            return state;
    }
}
