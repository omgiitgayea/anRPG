import {Component, OnInit} from '@angular/core';
import {MdDialog} from "@angular/material";
import {LoginComponent} from "../login/login.component";
import {DatabaseService} from "../database.service";
import {AngularFire} from "angularfire2";

@Component({
    selector: 'app-sidemenu',
    templateUrl: './sidemenu.component.html',
    styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

    constructor(public dialog: MdDialog, private dbService: DatabaseService, public af: AngularFire) {
        this.af.auth.subscribe(auth => console.log(auth));
    }

    ngOnInit() {
    }

    startLogin(): void {
        this.dialog.open(LoginComponent)
    }

    googleLogin(): void {
        console.log("me first...");
        this.dbService.googleLogin();
    }
}
