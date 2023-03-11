import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Vaccination} from "../model/Vaccination";
import {Save} from "../model/Save";
import {VaccinesService} from "./vaccines.service";

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  userName: string = "";
  birthDate: string = "";
  firstVaccDate: string = "";
  agreement1: boolean = false;
  selectedVaccines: Vaccination[]=[];

  private isSelectorActive$ = new BehaviorSubject<any>({});
  selectedIsSelectorActive$ = this.isSelectorActive$.asObservable();
  private isCalendarActive$ = new BehaviorSubject<any>({});
  selectedIsCalendarActive$ = this.isCalendarActive$.asObservable();


  constructor(private readonly vaccService: VaccinesService) {
    this.setIsSelectorActive(false);
    this.setIsCalendarActive(false);
  }

  setIsSelectorActive(value: boolean){
    this.isSelectorActive$.next(value);
  }

  setIsCalendarActive(value: boolean){
    this.isCalendarActive$.next(value);
  }

  setSavedData(save: Save){
    this.resetForm();
    this.birthDate = save.birthDate;
    this.firstVaccDate = save.firstVaccDate;
    this.userName = save.userName;
    this.agreement1 = save.agreement1;
    save.selectedVaccinesIds.forEach((vaccId)=>{
      let vacc = this.vaccService.getVaccWithId(vaccId);
      if(vacc != null){
        this.selectedVaccines.push(vacc);
      }
    })
  }

  private resetForm(){
    this.birthDate="";
    this.firstVaccDate="";
    this.userName = "";
    this.agreement1 = false;
    this.selectedVaccines = [];
    this.setIsCalendarActive(false);
    this.setIsSelectorActive(false);
  }




}
