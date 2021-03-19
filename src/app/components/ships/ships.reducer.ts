import * as fromShips from './ships.action';

export interface shipsState {
    ship : string
}

export const initialState = {
    ship : 'Ships'
}

export function shipReducer(state: shipsState = initialState, action: fromShips.ShipsActions){
    
    switch (action.type)   {
        case fromShips.NEWSHIPS:
            return {
                ...state,
                ship : action.payload
            }
    
        default:
            return state;
    }
}