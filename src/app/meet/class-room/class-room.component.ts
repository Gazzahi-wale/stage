import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-class-room',
  templateUrl: './class-room.component.html',
  styleUrls: ['./class-room.component.css']
})
export class ClassRoomComponent implements OnInit {

  role:any;
  tab:any=[];
  constructor(private sr:ServiceService) { }

  // ex=>{ 
  //   this.tab=ex;

  getAllCours(){ 
    this.sr.getAllCours().subscribe(ex=>{ 
    this.tab=ex
    console.log(ex)
    } )  }
  ngOnInit(): void {
    this.getAllCours()
    this.role=localStorage.getItem('role')
  }



}
