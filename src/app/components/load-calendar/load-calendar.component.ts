import { Component } from '@angular/core';
import * as data from '../../dataSource/save.json';
import {Save} from "../../model/Save";
import {UserDataService} from "../../services/user-data.service";

@Component({
  selector: 'app-load-calendar',
  templateUrl: './load-calendar.component.html',
  styleUrls: ['./load-calendar.component.css']
})
export class LoadCalendarComponent {

  constructor(private readonly userDataService: UserDataService) {
  }

  loadSavedCalendar(){
    const save: Save = (data as any).default[0];
    this.userDataService.setSavedData(save);
    this.userDataService.setIsSelectorActive(true);
    this.userDataService.setIsCalendarActive(true);
  }

}
