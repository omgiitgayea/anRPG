import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AngularFireModule} from "angularfire2";
import {MaterialModule} from "@angular/material";
import "hammerjs";

import {AppComponent} from './app.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';

export const firebaseConfig = {
    apiKey: "AIzaSyCaFpifiBHt8a7JDRNcyQOlWtFExswm_4k",
    authDomain: "my-test-rpg.firebaseapp.com",
    databaseURL: "https://my-test-rpg.firebaseio.com",
    storageBucket: "my-test-rpg.appspot.com",
    messagingSenderId: "713128869102"
};

@NgModule({
    declarations: [
        AppComponent,
        SidemenuComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AngularFireModule.initializeApp(firebaseConfig),
        MaterialModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
