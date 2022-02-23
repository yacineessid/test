import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @Input() user=''

@Output() newUser= new EventEmitter<string>();

@Output() showImg= new EventEmitter<boolean>();

@Output() deleteUser =new EventEmitter<string>();

lineThrough=''

  constructor() {

   }

  ngOnInit(): void {
  }

  addNewUser(value:string){
    this.newUser.emit(value)
  }

  showUsers(){
   this.showImg.emit(true)
  }

  delete(){
this.deleteUser.emit(this.user)
this.lineThrough = this.lineThrough ? '' : 'line-through' ;

  }

}
