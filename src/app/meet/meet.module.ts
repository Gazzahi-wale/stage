import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MeetRoutingModule } from './meet-routing.module';
import { MeetComponent } from './meet.component';
import { ClassRoomComponent } from './class-room/class-room.component';
import { AddcoursComponent } from './addcours/addcours.component';
import { AppelComponent } from './appel/appel.component';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    MeetComponent,
    ClassRoomComponent,
    AddcoursComponent,
    AppelComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    MeetRoutingModule,FormsModule
  ]
})
export class MeetModule { }
