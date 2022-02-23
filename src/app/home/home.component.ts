import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  specialUser='Sami'

  users=['ahmed' , 'assil' , 'eya' , 'amin']
  jobs=['doctor' , 'developer' , 'footballer']
  shown=false

sho=false


  constructor() { }

  ngOnInit(): void {
  }
//add new user
  addOne(newUser:string){
    this.users.push(newUser)
  }

// add new job
  addJob(jobs:string){
this.jobs.push(jobs)

  }

  //show  users with button 'show users'
 show(data:boolean){
 this.shown=!this.shown

 } 


remove(user:string){

  console.log('user deleted');
  
 }

 showThis(){
 this.sho=!this.sho

 }

}
