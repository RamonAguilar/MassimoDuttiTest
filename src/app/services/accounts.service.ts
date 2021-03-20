import { HttpResponse } from '@angular/common/http';
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
  private users = JSON.parse(localStorage.getItem('users')) || [];


  constructor(
      private router: Router,
  ) {
      this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
      this.user = this.userSubject.asObservable();
  }
  public get userValue(): User {
    return this.userSubject.value;
  }

  login(username, password) {

    const user = this.users.find(x => x.username === username && x.password === password);

    if (!user) return this.error('Username or password is incorrect');
    // create user in local storage to save login
    localStorage.setItem('user', JSON.stringify(user));
    this.userSubject.next(user);
    return this.ok();
  }
  
  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/account/login']);
  }

  register(user: User) {
    
    if (this.users.find(x => x.username === user.username)) {
        return this.error('Username "' + user.username + '" is already taken')
    }
    // create user in local storage
    user.id = this.users.length ? Math.max(...this.users.map(x => x.id)) + 1 : 1;
    this.users.push(user);
    localStorage.setItem('users', JSON.stringify(this.users));
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
