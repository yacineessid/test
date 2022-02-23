import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { UsersComponent } from './users/users.component';
import { JobsComponent } from './jobs/jobs.component';
import { HomeComponent } from './home/home.component';
import {MatListModule} from '@angular/material/list';
import { StoreModule } from '@ngrx/store';
import {counterReducer} from './store/counter.reducer';
import { CounterComponent } from './counter/counter.component'
import { counterReducer2 } from './store/counter.actions';
import { EffectsModule } from '@ngrx/effects';
import { TodosEffect } from './store/effects/todos.effects';
import { TodosComponent } from './todos/todos.component';
import { reducers } from './store/store';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersComponent,
    JobsComponent,
    HomeComponent,
    CounterComponent,
    TodosComponent
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([TodosEffect])
    

  ],

  exports: [
  MatButtonModule, 
  MatCheckboxModule,
  MatMenuModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule
],



  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
