import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map } from "rxjs";
import { FailedAction, LOAD, SuccessAction } from "../todos.actions";

import { mergeMap } from "rxjs";

import { of } from "rxjs";

@Injectable()
export class TodosEffect{
todoEffect$=createEffect(()=>this.actions.pipe(
    ofType(LOAD),
    mergeMap(() =>this.http.get('https://jsonplaceholder.typicode.com/todos').
    pipe(
        map((data)=>new SuccessAction(data)),
        catchError((err)=>of(new FailedAction()))
    ) )
  )
);

    constructor(private http:HttpClient , private actions:Actions){

    }
}