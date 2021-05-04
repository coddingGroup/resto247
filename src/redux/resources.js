import * as ActionTypes from './ActionTypes';

export const Resources = (state = {
    isLoading: true,
    errMess: null,
    products: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_RESOURCES:
            return {...state, isLoading: false, errMess: null, products: action.payload}

        case ActionTypes.RESOURCES_LOADING:
            return {...state, isLoading: true, errMess: null, products: []}

        case ActionTypes.RESOURCES_FAILED:
            return {...state, isLoading: false, errMess: action.payload, products: []}
        case ActionTypes.ADD_ONE_RESOURCE:
            let prev = state.products;
            return {...state, isLoading: false, errMess: null, products: [...prev, action.payload]};
        case ActionTypes.CHANGE_RESOURCE_INFO:
            let pre = state.products;
            pre.forEach(resource => {
               if(resource.id === action.payload.resourceId){
                   resource.totalCost= action.payload.totalCost;
                   resource.stockQuantity = action.payload.stockQuantity;
               }
            });
            return {...state, isLoading: false, errMess: null, products: [...pre]};



        default:
            return state;
    }
}
