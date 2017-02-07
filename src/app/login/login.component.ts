import {Component, OnInit} from '@angular/core';
import {MdDialogRef, MdSnackBar} from "@angular/material";
import {DatabaseService} from "../database.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(public dialogRef: MdDialogRef<LoginComponent>, public snackBar: MdSnackBar, private dbService: DatabaseService) {
    }

    ngOnInit() {
    }

    onClick(): void {
        this.dbService.login();
        this.dialogRef.close();
        this.snackBar.open("Hey, you logged in!", "", {duration: 1000})
    }
}
