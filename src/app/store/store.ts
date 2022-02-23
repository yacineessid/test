
import { counterReducer , } from "./counter.reducer";
import { TodosReducer } from "./todos.reducer";

// export interface StoreInterface{
//   counter: count
// }

export  interface StoreInterface{
    todos : TODOS  
}
interface TODOS{
    todo:string
}

export const  reducers ={ counter :counterReducer , todos:TodosReducer}