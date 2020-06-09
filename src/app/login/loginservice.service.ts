
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { IUser} from './user';
// import { Observable, BehaviorSubject } from 'rxjs';
// import { UserLoginAuth } from './login.component';
// import { map, catchError } from 'rxjs/operators';


// const AUTH_API = 'https://meetupsapp.herokuapp.com/api/auth/';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

// @Injectable({
//   providedIn: 'root'
// })
// export class LoginserviceService {
//   private currentUserSubject = new BehaviorSubject<any>(null); // initializing with no user object since logged out
//   constructor(private http: HttpClient) {}

//   loginUsers(userlogin: UserLoginAuth) {
//     const myHeaders = new Headers();
//     myHeaders.append('Content-Type', 'application/json');

//     const raw = JSON.stringify(userlogin);

//     const url = 'https://meetupsapp.herokuapp.com/api/auth/signin';
//     const options = {
//       method: 'POST',
//       headers: myHeaders,
//       body: raw,
//     };

//     return fetch(url, options
//     )
//       .then((response) => response.text())
//       .then((result) => {
//         console.log(result);
//         localStorage.setItem('token',  result);
//       })
//       .catch((error) => console.log('error', error));

//   }

//   login(credentials): Observable<any> {
//     return this.http.post(AUTH_API + 'signin', {
//       username: credentials.username,
//       password: credentials.password
//     }, httpOptions);
//   }

//   // loginUsers(userlogin: UserLoginAuth): Observable<any> {
//   //   const myHeaders = new Headers();
//   //   myHeaders.append('Content-Type', 'application/json');

//   //   const raw = JSON.stringify(userlogin);

//   //   const url = 'https://meetupsapp.herokuapp.com/api/auth/signin';
//   //   const options = {
//   //     method: 'POST',
//   //     headers: myHeaders,
//   //     body: raw,
//   //   };

//   //   return this.http.post(url, JSON.stringify(userlogin), {
//   //     headers: {
//   //       'Content-Type': 'application/json'
//   //     }
//   //     localStorage.setItem('token', )
//   //   });
//   // }

//   // login(userlogin: UserLoginAuth): Observable<any> {
//   //   const myHeaders = new Headers();
//   //   myHeaders.append('Content-Type', 'application/json');

//   //   const raw = JSON.stringify(userlogin);

//   //   const url = 'https://meetupsapp.herokuapp.com/api/auth/signin';
//   //   const options = {
//   //     headers: myHeaders,
//   //     body: raw,
//   //   };
//   //   return this.http.post<any>(url,  JSON.stringify(userlogin), {
//   //     headers: {
//   //           'Content-Type': 'application/json'
//   //         }}).pipe(
//   //     map(userInfo => {
//   //       localStorage.setItem('token', JSON.parse(userInfo.token));
//   //       this.currentUserSubject.next(userInfo.user); // <-- pump the value in here
//   //       return userInfo.user;
//   //     })
//   //   );
//   // }

//   // public getCurrentUser(): Observable<any> {
//   //   return this.currentUserSubject.asObservable();
//   // }

//   // public getcurrentUsername() {
//   //   return JSON.stringify(JSON.parse(localStorage.getItem('token')));
//   // }


//   getUsers(): Observable<IUser[]> {
//     const url = 'https://meetupsapp.herokuapp.com/user';
//     const auth = localStorage.getItem('token');
//     return this.http.get<IUser[]>(url, {
//        headers: {
//          Accept: 'application/json, text/plain',
//          'Content-Type': 'application/json',
//          Authorization: 'Bearer ' + auth
//        },
//      });
//    }

// }
