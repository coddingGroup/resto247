import * as ActionTypes from './ActionTypes';

export const Cart = (state = {
    isLoading: true,
    errMess: null,
    items: {},
    number: 0,
    id: 0,
    removeId: null,
    addedIds: []
}, action) => {
    let prev = state.items;
    let addedIds = state.addedIds;
    switch (action.type) {
        case ActionTypes.ADD_TO_CART:

            prev[++state.id] = action.payload;
            addedIds = [...addedIds, action.payload.id];
            return {
                ...state,
                isLoading: false,
                errMess: null,
                items: prev,
                number: (state.number + 1),
                addedIds: addedIds
            }

        case ActionTypes.ADD_OR_REMOVE_TO_CART_LOADING:
            return {...state, isLoading: true, errMess: null}

        case ActionTypes.CART_FAIL:
            return {...state, isLoading: false, errMess: action.payload}

        case ActionTypes.REMOVE_TO_CART:

            let ads = addedIds.filter((value) => {
                return (value !== action.removeId);
            });
            let keys = Object.keys(prev);
            let deleteId = keys.filter(value => {
                return prev[value].id === action.removeId
            })
            delete prev[deleteId[0]];

            return {...state, isLoading: false, errMess: null, items: prev, addedIds: ads, number: (state.number - 1)}

        default:
            return state;
    }
}
