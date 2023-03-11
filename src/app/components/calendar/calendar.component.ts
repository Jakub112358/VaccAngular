import {Component, OnInit} from '@angular/core';
import {UserDataService} from "../../services/user-data.service";
import {Vaccination} from "../../model/Vaccination";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  constructor(private readonly userDataService: UserDataService) {
  }

  ngOnInit(): void {
    console.log('calendar: on init')
    this.vaccines = this.userDataService.selectedVaccines;
    this.computeDosesDates();
  }

  vaccines: Vaccination[] = [];

  private computeDosesDates() {
    this.vaccines.forEach((vacc) => {
      vacc.dosesDates = [];
      vacc.intervals.forEach((days) => {
        //TODO: refactor dates to Date class, not string
        if (vacc.dosesDates != null && vacc.dosesDates.length > 0) {
          const date: Date = new Date(vacc.dosesDates[vacc.dosesDates.length - 1]);
          date.setDate(date.getDate() + days);
          vacc.dosesDates.push(date);
        } else {
          const date: Date = new Date(Date.parse(this.userDataService.birthDate));
          date.setDate(date.getDate() + days);
          vacc.dosesDates = [date];
        }
      })
    })
  }

}
