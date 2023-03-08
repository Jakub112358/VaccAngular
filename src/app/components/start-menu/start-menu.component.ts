import { Component } from '@angular/core';

@Component({
  selector: 'app-start-menu',
  templateUrl: './start-menu.component.html',
  styleUrls: ['./start-menu.component.css']
})
export class StartMenuComponent {
  mode: string = "";
  setMode(mode: string) {
    this.mode = mode;
  }
}
