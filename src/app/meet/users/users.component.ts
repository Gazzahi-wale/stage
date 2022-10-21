import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  tab: any = [];

  constructor(private sr: ServiceService) { }

  getAll() {
    this.sr.getAllUsers().subscribe(ex => {
      this.tab = ex;
console.log(ex)
    })
  }
  ngOnInit(): void {
    this.getAll()
  }}
