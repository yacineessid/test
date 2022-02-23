import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

 
  @Output() jobs = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  addJob(newJob:string){
    this.jobs.emit(newJob)
  }

}

