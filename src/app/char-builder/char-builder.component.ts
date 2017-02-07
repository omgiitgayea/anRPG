import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-char-builder',
    templateUrl: './char-builder.component.html',
    styleUrls: ['./char-builder.component.css']
})
export class CharBuilderComponent implements OnInit {
    selectedClass: string;
    myClass: string;
    myClassDesc: string;

    charClasses = [
        {value: "tank-0", className: "A tank", description: "Ya know, a tank"},
        {value: "healer-1", className: "A healer", description: "Ya know, a healer"},
        {value: "rangedDPS-2", className: "A ranged DPS", description: "Death from a distance"},
        {value: "meleeDPS-3", className: "A melee DPS", description: "Death up close and personal"},
        {value: "useless-4", className: "Leroy Jenkins", description: "The character that just screws up everything"}
    ];

    constructor() {
    }

    ngOnInit() {
    }
}
