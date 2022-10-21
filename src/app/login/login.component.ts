import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
Connect()
{ 
  this.sr.getAllUsers().subscribe(ex=>{ 
    this.tab=ex;

    if(this.login.includes("@")){ 
    for (let index = 0; index < this.tab.length; index++) {
      if(this.tab[index]['email']==this.login)
      {
        localStorage.setItem('id',this.tab[index]['id'])
        localStorage.setItem('email',this.tab[index]['email'])
        localStorage.setItem('nom',this.tab[index]['nom'])
        localStorage.setItem('prenom',this.tab[index]['prenom'])
        localStorage.setItem('role',this.tab[index]['role'])

        this.router.navigate(['/ClassRoom']);
      }else{
        this.test=false;

        this.msj="compte non trouvé!"
       }
    }}else{
      this.test=false;
      window.location.reload();

      this.msj="verifier email!"
     }
    
    console.log(ex)
  })
}


 
  ngOnInit(): void {
   // this.Connect()
  }


}
