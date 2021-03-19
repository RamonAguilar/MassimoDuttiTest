import { Action } from "@ngrx/store";

export const NEWSHIPS = '[Ship] New';

export class NewShips implements Action {
    readonly type = NEWSHIPS;

    constructor ( public payload : {}){}
}

export type ShipsActions = NewShips;
