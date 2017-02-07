import { Component, OnInit } from '@angular/core';
import {MdDialog} from "@angular/material";
import {LoginComponent} from "../login/login.component";

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }

  startLogin(): void {
      this.dialog.open(LoginComponent)
  }

}
