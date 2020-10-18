import { Injectable } from '@angular/core';
import {student} from './student'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private url1="https://cs251-outlab-6.herokuapp.com/initial_values/";
  constructor(
    private http: HttpClient
  ){}
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getstudent(): Observable<student>{
    return this.http.get<student>(this.url1);
  }
  getupdated(student:student): Observable<student>{
    return this.http.post<student>("https://cs251-outlab-6.herokuapp.com/add_new_feedback/",student,this.httpOptions)
  }
}
