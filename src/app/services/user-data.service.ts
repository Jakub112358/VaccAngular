import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Vaccination} from "../model/Vaccination";

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  name: string = "";
  //birthDate: string = "";
  // birthDate: string = "2023-03-10";
  birthDate: string = "";
  firstVaccDate: string = "";
  agreement1: boolean = false;
  selectedVaccines: Vaccination[]=[];
  //just for tests, version above is correct;
  // selectedVaccines: Vaccination[]=[
  //   {id: 1, name: 'Vacc 3 in 1', isChecked: false, isDefault: false, diseasesId: [1,2,3],intervals:[0,10,10]},
  //   {id: 2, name: 'Vacc B', isChecked: false, isDefault: false, diseasesId: [4],intervals:[0,20]},
  //   {id: 3, name: 'Vacc C', isChecked: false, isDefault: false, diseasesId: [5],intervals:[0,30]},];
  private isSelectorActive$ = new BehaviorSubject<any>({});
  selectedIsSelectorActive$ = this.isSelectorActive$.asObservable();
  private isCalendarActive$ = new BehaviorSubject<any>({});
  selectedIsCalendarActive$ = this.isCalendarActive$.asObservable();


  constructor() {
    this.setIsSelectorActive(false);
    this.setIsCalendarActive(false);
  }

  setIsSelectorActive(value: boolean){
    this.isSelectorActive$.next(value);
  }

  setIsCalendarActive(value: boolean){
    this.isCalendarActive$.next(value);
  }




}
