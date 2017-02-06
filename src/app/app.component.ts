import {Component} from '@angular/core';
import {AngularFire, FirebaseListObservable} from "angularfire2";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = "Lets build an RPG!!";
    characters: FirebaseListObservable<any[]>;
    constructor(af: AngularFire) {
        this.characters = af.database.list("/characters");
    }
}
