import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  private isAuth = false;

  constructor() { }

  login(email: string, password: string) {
    // TODO logowanie

    this.isAuth = true;
  }

  isAuthenticated() {
    return this.isAuth;
  }
}
