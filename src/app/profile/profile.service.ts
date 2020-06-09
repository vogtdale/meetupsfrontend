import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private http: HttpClient) {}


 getCurrentUser() {
    return localStorage.getItem('token');
  }

  getProfile()  {
    const url = 'https://meetupsapp.herokuapp.com/user/id';
    const auth = localStorage.getItem('token');
    return this.http.get(url, {
      headers: {
        Accept: 'application/json, text/plain',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + auth
      },
    });

  }


}
