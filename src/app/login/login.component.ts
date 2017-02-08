import {Component, OnInit} from '@angular/core';
import {MdDialogRef, MdSnackBar} from "@angular/material";
import {DatabaseService} from "../database.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    login: string;
    password: string;

    constructor(public dialogRef: MdDialogRef<LoginComponent>, public snackBar: MdSnackBar, private dbService: DatabaseService) {
    }

    ngOnInit() {
    }

    onClick(): void {
        if (this.login && this.password) {
            this.dbService.login(this.login, this.password);
            this.dialogRef.close();
            this.snackBar.open("Hey, you logged in!", "", {duration: 1000})
        }

    }
}
