import { SUCCESS,FAILED } from "./todos.actions";

export interface Todo{
   userId:number,
   id:number,
   title:string,
   completed:boolean
}

export function TodosReducer(state:Todo[],action:any){
    switch(action.type){
        case SUCCESS:
            return action.payload
        
        case FAILED:
           console.log('error' ,action.payload)
           
           return state;
            
    }
}