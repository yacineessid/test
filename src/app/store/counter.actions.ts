import { ActionsSubject, createAction } from "@ngrx/store";
import { Action } from "@ngrx/store";

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');

 export  interface StoreInterface{ 
    count2: Counter
}
interface Counter{
    n:number
}

let initialState={
    n:0
}

const INCREMENT= 'increment'
const DECREMENT = 'decrement'

export function counterReducer2(state=initialState , action:any){
    switch (action.type) {
        case INCREMENT:
            return  {
       n:state.n + action.payload
            }
        case DECREMENT :
        return {
            n:state.n - action.payload
        }
    
        default:
         return state

    }
}

export class IncrementAction{
    type:string=INCREMENT
    payload:any
    constructor(payload:any){
        this.payload=payload
    }

}

export class DecrementAction{
    type:string=DECREMENT
    payload:any

    constructor(payload:any){
        this.payload=payload
    }
    
}