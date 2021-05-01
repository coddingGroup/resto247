import * as ActionTypes from '../ActionTypes';

export const MarchResourceToProducts = (state = {
    isLoading: true,
    errMess: null,
    marchResourceToProducts: []
}, action) => {
    switch (action.type) {
        case ActionTypes.SET_MARCH_RESOURCE_TO_PRODUCTS:
            return {...state, isLoading: false, errMess: null, marchResourceToProducts: action.payload}

        case ActionTypes.MARCH_RESOURCE_TO_PRODUCTS_LOADING:
            return {...state, isLoading: true, errMess: null}

        case ActionTypes.MARCH_RESOURCE_TO_PRODUCTS_FAILED:
            return {...state, isLoading: false, errMess: action.payload}

        default:
            return state;
    }
}
