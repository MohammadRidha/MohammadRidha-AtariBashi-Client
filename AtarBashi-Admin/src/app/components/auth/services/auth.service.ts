import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
<<<<<<< HEAD

=======
>>>>>>> 61ce96e98dfbdd0639f97508fac480dd95ebc572

@Injectable({
  providedIn: 'root',
})
export class AuthService {
<<<<<<< HEAD
  baseUrl = environment.apiUrl + 'site/admin/auth/';
=======
  baseUrl = environment.apiUrl + '/site/admin/auth/';
>>>>>>> 61ce96e98dfbdd0639f97508fac480dd95ebc572
  jwtHelper = new JwtHelperService();
  decodedToken: any;

  constructor(private http: HttpClient) {}

  login(model: any) {
    return this.http.post(this.baseUrl + 'login', model).pipe(
      map((resp: any) => {
        const user = resp;
        if (user) {
          localStorage.setItem('token', user.token);
          this.decodedToken = this.jwtHelper.decodeToken(user.token);
        }
      })
    );
  }
  register(model: any) {
    return this.http.post(this.baseUrl + 'register', model);
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }
}
