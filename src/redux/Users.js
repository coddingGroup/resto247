import * as ActionTypes from './ActionTypes';

export const Users = (state = {
    isLoading: false,
    errMess: null,
    text: "",
    output: []
}, action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_TEXT_TO_SEARCH:
            return {...state, isLoading: false, errMess: null, text: action.payload}
        case  ActionTypes.ADD_SEARCH_RESULT:
            return {...state, isLoading: false, errMess: null, output: action.payload}

        case ActionTypes.SEARCH_LOADING:
            return {...state, isLoading: false, errMess: null, text: "", output: []}

        case ActionTypes.SEARCH_FAIL:
            return {...state, isLoading: false, errMess: action.payload, text: "", output: []}

        default:
            return state;
    }
}
