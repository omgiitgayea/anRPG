import {Component, OnInit} from '@angular/core';
import {MdDialog, MdSidenav} from "@angular/material";
import {LoginComponent} from "../login/login.component";
import {DatabaseService} from "../database.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-sidemenu',
    templateUrl: './sidemenu.component.html',
    styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {
    loggedIn: boolean;
    loggedInSubscription: Subscription;
    authObject: any;

    constructor(public dialog: MdDialog, private dbService: DatabaseService, private sidenav: MdSidenav) {
        this.loggedInSubscription = dbService.amLoggedIn$.subscribe(
            updateStatus => {
                this.loggedIn = updateStatus.loggedIn;
                this.authObject = updateStatus.authObject;
            }
        )
    }

    ngOnInit() {
    }

    startLogin(): void {
        this.dialog.open(LoginComponent);
        this.sidenav.close();
    }

    googleLogin(): void {
        this.dbService.googleLogin();
        this.sidenav.close();
    }

    googleLogout(): void {
        this.dbService.googleLogout();
        this.sidenav.close()
    }
}
