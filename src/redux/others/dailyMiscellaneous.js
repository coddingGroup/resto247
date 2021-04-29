import * as ActionTypes from '../ActionTypes';

export const DailyMiscellaneous = (state = {
    isLoading: true,
    errMess: null,
    dailyMiscellaneous: []
}, action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_DAILY_MISCELLANEOUS:
            return {...state, isLoading: false, errMess: null, dailyMiscellaneous: action.payload};

        case ActionTypes.DAILY_MISCELLANEOUS_LOADING:
            return {...state, isLoading: true, errMess: null, dailyMiscellaneous: []};

        case ActionTypes.DAILY_MISCELLANEOUS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, dailyMiscellaneous: []};

        default:
            return state;
    }
}