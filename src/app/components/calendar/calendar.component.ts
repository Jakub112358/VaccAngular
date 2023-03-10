import {Component} from '@angular/core';
import {UserDataService} from "../../services/user-data.service";
import {Vaccination} from "../../model/Vaccination";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  constructor(private readonly userDataService: UserDataService) {
    this.computeDosesDates();
  }

  vaccines: Vaccination[] = this.userDataService.selectedVaccines;

  private computeDosesDates() {
    console.log('compute doses date')
    this.vaccines.forEach((vacc) => {
      console.log('in vaccination: ' + vacc.name)
      vacc.intervals.forEach((days) => {
        //TODO: refactor dates to Date class, not string
        if (vacc.dosesDates != null) {
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
