import * as ActionTypes from './ActionTypes';

export const Behaviors = (state = {
    flippingCardSaveButton: 'enable',
    other:''
}, action) => {
    switch (action.type) {
        case ActionTypes.FLIPPING_CARD_SAVE_ENABLE:
            return {...state, flippingCardSaveButton: action.payload};

        case ActionTypes.FLIPPING_CARD_SAVE_DISABLE:
            return {...state, flippingCardSaveButton: action.payload};

        case ActionTypes.FLIPPING_CARD_SAVE_LOADING:
            return {...state, flippingCardSaveButton: action.payload};

        default:
            return state;
    }
}