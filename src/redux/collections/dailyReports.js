import * as ActionTypes from '../ActionTypes';

export const dailyReports = (state = {
    isLoading: true,
    errMess: null,
    dailyReports: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, errMess: null, dailyReports: action.payload};

        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true, errMess: null, dailyReports: []};

        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload, dailyReports: []};

        default:
            return state;
    }
}