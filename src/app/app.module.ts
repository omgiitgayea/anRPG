import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AngularFireModule, AuthProviders, AuthMethods} from "angularfire2";
import {MaterialModule} from "@angular/material";
import "hammerjs";

import {AppComponent} from './app.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { CharBuilderComponent } from './char-builder/char-builder.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';

import {DatabaseService} from "./database.service"

export const firebaseConfig = {
    apiKey: "AIzaSyCaFpifiBHt8a7JDRNcyQOlWtFExswm_4k",
    authDomain: "my-test-rpg.firebaseapp.com",
    databaseURL: "https://my-test-rpg.firebaseio.com",
    storageBucket: "my-test-rpg.appspot.com",
    messagingSenderId: "713128869102"
};

export const firebaseAuthConfig = {
    provider: AuthProviders.Google,
    method: AuthMethods.Redirect
}

@NgModule({
    declarations: [
        AppComponent,
        SidemenuComponent,
        CharBuilderComponent,
        LoginComponent,
        RegisterComponent,
        LogoutComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
        MaterialModule.forRoot()
    ],
    providers: [DatabaseService],
    bootstrap: [AppComponent],
    entryComponents: [
        LoginComponent,
        LogoutComponent,
        RegisterComponent
    ]
})
export class AppModule {
}
