import {Component, OnInit} from '@angular/core';
import {VaccinesService} from "../../services/vaccines.service";
import {Disease} from "../../model/Disease";


@Component({
  selector: 'app-vaccine-selector',
  templateUrl: './vaccine-selector.component.html',
  styleUrls: ['./vaccine-selector.component.css']
})
export class VaccineSelectorComponent implements OnInit{
  diseases: Disease[] = [];
  constructor(private readonly vaccService: VaccinesService) {
  }

  ngOnInit(): void {
    this.diseases = this.vaccService.getDiseases();
  }

  getVaccsForDisease(diseaseId: number):string[]{
    return this.vaccService.getVaccsForDisease(diseaseId).map((vacc)=>vacc.name);
  }

  showVaccs(){

  }

}
