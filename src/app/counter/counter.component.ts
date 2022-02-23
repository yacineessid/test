import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import {  DecrementAction,  IncrementAction,  StoreInterface } from '../store/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

count=0
  constructor(private store :Store<StoreInterface>) {

    this.store.subscribe(data=>this.count = data.count2.n);
    
   }

  ngOnInit(): void {
  }

  increment(){
  this.store.dispatch(new IncrementAction(2))
  console.log(this.count);
  
  }

  decrement(){
  this.store.dispatch(new DecrementAction(2))
  }

  // reset(){
  // this.store.dispatch({type:'default'})
  // }

}
