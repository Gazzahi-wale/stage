import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcoursComponent } from './addcours/addcours.component';
import { AppelComponent } from './appel/appel.component';
import { ClassRoomComponent } from './class-room/class-room.component';
import { MeetComponent } from './meet.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '', component: MeetComponent,
    children: [
      {
        path: '',
        redirectTo: 'ClassRoom',
        pathMatch: 'full'

      },
      {
        path: 'ClassRoom',
        component: ClassRoomComponent
      },
      {
        path: 'addCours',
        component: AddcoursComponent
      },
      {
        path: 'AllUsers',
        component: UsersComponent
      },
      {
        path: 'Appel/:nomCours',
        component: AppelComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeetRoutingModule { }
