import { Injectable } from '@angular/core';
import {AngularFire} from "angularfire2";

@Injectable()
export class DatabaseService {

  constructor(private database: AngularFire) { }

  login() {
      // this.database.auth.login();
      console.log("Hi from the service!")
  }

  register() {

  }

  logout() {
      // this.database.auth.logout();
  }

}
