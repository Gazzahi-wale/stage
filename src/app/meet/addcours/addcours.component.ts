import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-addcours',
  templateUrl: './addcours.component.html',
  styleUrls: ['./addcours.component.css']
})
export class AddcoursComponent implements OnInit {

  test:boolean=false;
  msj=""
  nomCours="";
  Description="";
  datetime=""
  constructor( private sr:ServiceService,private router:Router) { }

  save()
  {
    let data:any={
      "nomCours":this.nomCours,
      "description":this.Description,
      "timeStart":this.datetime
     }
     this.sr.saveCour(data).subscribe(ex=>{ 
      console.log(ex)
  this.test=true
  this.msj="Cours ajouté"
  setTimeout(() => {
    this.router.navigate(['/ClassRoom']);
}, 1000); 
  
    })

   }
  ngOnInit(): void {
  }

}
