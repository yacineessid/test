import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreInterface } from  '../store/store'
import { LoadAction } from '../store/todos.actions';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(private store:Store<StoreInterface>) { 
    this.store.subscribe(data=>console.log(data.todos));
    
  }

  ngOnInit(): void {
  }

  loadTodos(){
   this.store.dispatch(new LoadAction)
  }

}
