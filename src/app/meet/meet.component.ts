import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meet',
  templateUrl: './meet.component.html',
  styleUrls: ['./meet.component.css']
})
export class MeetComponent implements OnInit {

 
  data:any
  constructor(private router:Router) { }
  //localStorage.getItem('user-background')

  checkConn()
  {
this.data=localStorage.getItem('id')
   }
  ngOnInit(): void {
    this.checkConn()
  }

}
