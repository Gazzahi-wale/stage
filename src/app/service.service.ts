import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from './Model/Room';
import { User } from './Model/User';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private baseUrladd: string = "http://localhost:8080/";

  constructor(private http:HttpClient) { }

  getAllUsers():Observable<any> {
    return this.http.get<any>(this.baseUrladd+"user/getuser");
  }

  getAllCours():Observable<any> {
    return this.http.get<any>(this.baseUrladd+"room/getRoom");
  }
  saveCour(Room:Room){ 
    return this.http.post(this.baseUrladd+"room/setRoom",Room)
  }

  saveUser(User:User){ 
    return this.http.post(this.baseUrladd+"user/setUser",User)
  }
}
