import * as ActionTypes from './ActionTypes';


export const Recommanded = (state = {
        isLoading: true,
        errMess: null,
        recommanded: []
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_RECOMMANDED:
            return { ...state, isLoading: false, errMess: null, recommanded: action.payload }

        case ActionTypes.RECOMMANDED_LOADING:
            return { ...state, isLoading: true, errMess: null, recommanded: [] }

        case ActionTypes.RECOMMANDED_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, recommanded: [] }

        default:
            return state;
    }
}