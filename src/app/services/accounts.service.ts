import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  constructor(
      private router: Router,
      private http: HttpClient
  ) {
      this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
      this.user = this.userSubject.asObservable();
  }
  public get userValue(): User {
    return this.userSubject.value;
}


  login(username, password) {
  }

  logout() {
      // remove user from local storage and set current user to null
      localStorage.removeItem('user');
      this.userSubject.next(null);
      this.router.navigate(['/account/login']);
  }

  register(user: User) {
    
      let users = JSON.parse(localStorage.getItem('users')) || [];

      if (users.find(x => x.username === user.username)) {
          return this.error('Username "' + user.username + '" is already taken')
      }

      user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
      return this.ok();
  
  }

  //Helper functions to simulate backend response

  ok() {
    return of(new HttpResponse({ status: 200 }))
  }

  error(message) {
    return throwError({ error: { message } });
  }
}
