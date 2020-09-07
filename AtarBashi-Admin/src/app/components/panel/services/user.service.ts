import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';




@Injectable({
  providedIn: 'root'
})

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer' + localStorage.getItem('token');
  })
};

export class UserService {
  baseUrl = environment.apiUrl + 'site/admin/users/';

constructor(private http: HttpClient) { }

getUsers(): Observable<User[]> {
  return this.http.get<User[]>(this.baseUrl, httpOptions);
}

getUser(id): Observable<User> {
  return this.http.get<User>(this.baseUrl + id, httpOptions);
}
}
