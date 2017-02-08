import {Injectable} from '@angular/core';
import {AngularFire} from "angularfire2";
import {Subject} from "rxjs";
import {MdSnackBar} from "@angular/material";

@Injectable()
export class DatabaseService {
    loggedIn: boolean;
    authObject: any;

    amLoggedIn = new Subject<any>();

    amLoggedIn$ = this.amLoggedIn.asObservable();

    constructor(public database: AngularFire, private snackbar: MdSnackBar) {
        this.database.auth.subscribe(auth => {
            this.authObject = auth;
            if (auth) {
                this.loggedIn = true;
            }
            else {
                this.loggedIn = false;
            }
            this.amLoggedIn.next({loggedIn: this.loggedIn, authObject: this.authObject})
        })
    }

    login(email: string, password: string): void {
        console.log(email, password);
        // this.database.auth.login({
        //     email: email,
        //     password: password
        // })
        //     .then((emailLog) => {
        //         this.snackbar.open("Logged in!", "", {duration: 1000});
        //     })
        //     .catch((emailLog) => {
        //         this.snackbar.open("Logged failed...", "", {duration: 1000});
        //     });
    }

    register(email: string, password: string): void {
        this.database.auth.createUser({email: email, password: password});

    }

    logout(): void {
        // this.database.auth.logout();
    }

    googleLogin(): void {
        this.database.auth.login()
            .then((snack) => {
                this.snackbar.open("Logged in with Google", "", {duration: 1000});
            })
            .catch((snack) => {
                this.snackbar.open("Google login failed", "", {duration: 1000});
            });
        ;
    }

    googleLogout(): void {
        this.database.auth.logout()
            .then((snack) => {
                this.snackbar.open("Signed out of Google", "", {duration: 1000});
            });
    }
}
