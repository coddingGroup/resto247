import * as ActionTypes from '../ActionTypes';

export const UserCollection = (state = {
    isLoading: true,
    errMess: null,
    user: JSON.parse(localStorage.getItem('user')),
    userCollection: JSON.parse(localStorage.getItem('userCollection'))
}, action) => {
    switch (action.type) {
        case ActionTypes.SET_USER:
            return {...state, isLoading: false, errMess: null, userCollection: action.userCollection, user: action.user}

        case ActionTypes.SET_USER_LOADING:
            return {...state, isLoading: true, errMess: null, user: {}, userCollection: {}}

        case ActionTypes.SET_USER_FAILED:
            return {...state, isLoading: false, errMess: action.payload, user: {}, userCollection: {}}

        default:
            return state;
    }
}
