import {Component, OnInit} from '@angular/core';
import {VaccinesService} from "../../services/vaccines.service";
import {Disease} from "../../model/Disease";
import {Vaccination} from "../../model/Vaccination";
import {Router} from "@angular/router";
import {UserDataService} from "../../services/user-data.service";


@Component({
  selector: 'app-vaccine-selector',
  templateUrl: './vaccine-selector.component.html',
  styleUrls: ['./vaccine-selector.component.css']
})
export class VaccineSelectorComponent implements OnInit {
  diseases: Disease[] = [];
  selectedVaccs: Vaccination[] = [];

  constructor(private readonly vaccService: VaccinesService,
  private readonly userDataService: UserDataService,
  private readonly router: Router) {
  }

  ngOnInit(): void {
    this.diseases = this.vaccService.getDiseases();
  }

  getVaccsForDisease(diseaseId: number): Vaccination[] {
    return this.vaccService.getVaccsForDisease(diseaseId);
  }


  confirmVaccs() {
    this.saveSelectedVaccs();
    this.userDataService.setIsCalendarActive(true);
    this.router.navigate(['calendar']);
  }

  private saveSelectedVaccs(){
    this.selectedVaccs = [];
    this.diseases.forEach((d) => {
      if (d.isChecked) {
        if (d.selectedVaccId != null) {
          let vac = this.vaccService.getVaccWithId(+d.selectedVaccId);
          if (vac != null && !this.selectedVaccs.includes(vac)) {
            this.selectedVaccs.push(vac);
          }
        }
      }
    })
    this.userDataService.selectedVaccines = this.selectedVaccs;
  }

}
