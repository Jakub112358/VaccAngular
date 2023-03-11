import {Injectable} from '@angular/core';
import {Disease} from "../model/Disease";
import {Vaccination} from "../model/Vaccination";
import {VACCINATIONS} from "../dataSource/mock-vaccinations";
import {DISEASES} from "../dataSource/mock-diseases";

@Injectable({
  providedIn: 'root'
})
export class VaccinesService {
  diseases: Disease[] = [];
  vaccines: Vaccination[] = [];

  constructor() {
    this.loadDiseasesFromDataSource();
    this.loadVaccinesFromDataSource();
  }

  getDiseases(): Disease[] {
    return this.diseases;
  }

  getVaccsForDisease(diseaseId: number): Vaccination[] {
    const vaccs: Vaccination[] = [];
    this.vaccines.forEach((v) => {
      if (v.diseasesId.includes(diseaseId)) {
        vaccs.push(v);
      }
    })
    return vaccs;
  }

  getVaccWithId(vaccId: number) {
    return this.vaccines.find((v) => v.id === vaccId);
  }

  getDiseaseWithId(disId: number) {
    return this.diseases.find((d) => d.id === disId);
  }

  setVaccSelected(vacc: Vaccination) {
    vacc.diseasesId.forEach((disId) => {
      let dis = this.getDiseaseWithId(disId);
      if(dis != null){
        dis.selectedVaccId = vacc.id;
      }
    })
  }

  private loadDiseasesFromDataSource() {
    this.diseases = DISEASES;
  }

  private loadVaccinesFromDataSource() {
    this.vaccines = VACCINATIONS;
  }


}
