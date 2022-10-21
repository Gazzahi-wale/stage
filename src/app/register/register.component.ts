import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  tab:any=[];
  login="";
  email=""
  role="";
  prenom=""
  nom=""
  test!:boolean;
  msj=""
  emailRegex = '^[a-z0-9._%+-]+[a-z0-9.-]+\.[a-z]{2,4}$';
  constructor(private sr :ServiceService,private router:Router) { }

  register()
{
  if(this.email.includes("@")){ 

  let data:any={ 
    "nom":this.nom,
    "prenom":this.prenom,
    "email":this.email,
    "role":this.role
  }
  this.sr.saveUser(data).subscribe(ex=>{ 
    console.log(ex)
  this.test=true
  this.msj="User ajouter avec success!"
  setTimeout(() => {
    this.router.navigate(['/Login']);
}, 1000); 
  })}else{
    this.test=false;
    this.msj="verifier email!"
   
   }
  

 }

  ngOnInit(): void {
  }

}
