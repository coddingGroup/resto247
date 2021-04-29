import * as ActionTypes from '../ActionTypes';

export const DailyResourcesReports = (state = {
    isLoading: true,
    errMess: null,
    dailyResourcesReports: []
}, action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_DAILY_RESOURCES_REPORTS:
            return {...state, isLoading: false, errMess: null, dailyResourcesReports: action.payload};

        case ActionTypes.DAILY_RESOURCES_REPORTS_LOADING:
            return {...state, isLoading: true, errMess: null, dailyResourcesReports: []};

        case ActionTypes.DAILY_RESOURCES_REPORTS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, dailyResourcesReports: []};

        default:
            return state;
    }
}