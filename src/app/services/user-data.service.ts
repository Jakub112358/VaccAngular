import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  name: string = "";
  birthDate: string = "";
  firstVaccDate: string = "";
  agreement1: boolean = false;
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
