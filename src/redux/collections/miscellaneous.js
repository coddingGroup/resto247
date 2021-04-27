import * as ActionTypes from '../ActionTypes';

export const Miscellaneous = (state = {
    isLoading: true,
    errMess: null,
    miscellaneous: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_MISCELLANEOUS:
            return {...state, isLoading: false, errMess: null, miscellaneous: action.payload}

        case ActionTypes.MISCELLANEOUS_LOADING:
            return {...state, isLoading: true, errMess: null}

        case ActionTypes.MISCELLANEOUS_FAILED:
            return {...state, isLoading: false, errMess: action.payload}
        case ActionTypes.ADD_ONE_MISCELLANEOUS:
            let prev = state.miscellaneous;
            return {...state, isLoading: false, errMess: null, products: [...prev,action.payload]};

        default:
            return state;
    }
}
