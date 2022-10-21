import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MeetModule } from './meet/meet.module';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { 
    path:'Login',
    component:LoginComponent
  },
  { 
    path:'Register',
    component:RegisterComponent
  },
  {
    path:'',
    redirectTo:'Login',
    pathMatch:'full'
   },
   {
    path:'ClassRoom',
    loadChildren:()=>import('./meet/meet.module').then(m=>MeetModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
