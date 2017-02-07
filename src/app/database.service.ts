import {Injectable} from '@angular/core';
import {AngularFire} from "angularfire2";

@Injectable()
export class DatabaseService {

    constructor(public database: AngularFire) {
    }

    login() {
        // this.database.auth.login();
        console.log("Hi from the service!")
    }

    register() {

    }

    logout() {
        // this.database.auth.logout();
    }

    googleLogin():void {
        this.database.auth.login();
    }
}
