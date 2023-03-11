import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserDataService} from "../../services/user-data.service";

@Component({
  selector: 'app-new-calendar',
  templateUrl: './new-calendar.component.html',
  styleUrls: ['./new-calendar.component.css']
})
export class NewCalendarComponent implements OnInit {


  agreement1: boolean = false;
  name: string = "";
  birthDate: string = "";
  firstVaccDate: string = "";

  incorrectName: boolean = false;
  incorrectBirthDate: boolean = false;
  incorrectVaccDate: boolean = false;
  agreementNotChecked: boolean = false;

  constructor(private readonly router: Router,
              private readonly userData: UserDataService) {
  }

  ngOnInit(): void {
    this.getCurrentUserData();
  }

  createCalendar() {
    if (this.validateInput()) {
      this.saveCurrentUserData();
      this.userData.setIsSelectorActive(true);
      this.router.navigate(['selector']);
    }
  }


  onBirthDateChange() {
    this.firstVaccDate = this.birthDate;
  }

  private validateInput(): boolean {
    const isValidName = this.validateName();
    const isValidBirth = this.validateBirthDate();
    const isValidFirstVacc = this.validateFirstVaccDate();
    const isValidAgreement1 = this.validateAgreement1();
    return isValidName && isValidBirth && isValidFirstVacc && isValidAgreement1;
  }

  private validateName(): boolean {
    if (this.name !== null && this.name.length > 0) {
      this.incorrectName = false;
      return true;
    } else {
      this.incorrectName = true;
      return false;
    }
  }

  private validateBirthDate(): boolean {
    if (Date.parse(this.birthDate) <= (Date.now())) {
      this.incorrectBirthDate = false;
      return true;
    } else {
      this.incorrectBirthDate = true;
      return false
    }
  }

  private validateFirstVaccDate(): boolean {
    if (this.firstVaccDate !== null && this.firstVaccDate.length > 0 && this.firstVaccDate >= this.birthDate) {
      this.incorrectVaccDate = false;
      return true;
    } else {
      this.incorrectVaccDate = true;
      return false
    }
  }

  private validateAgreement1(): boolean {
    this.agreement1 ? this.agreementNotChecked = false : this.agreementNotChecked = true;
    return this.agreement1;
  }

  private getCurrentUserData() {
    this.agreement1 = this.userData.agreement1;
    this.name = this.userData.userName;
    this.birthDate = this.userData.birthDate;
    this.firstVaccDate = this.userData.firstVaccDate;
  }

  private saveCurrentUserData() {
    this.userData.agreement1 = this.agreement1;
    this.userData.userName = this.name;
    this.userData.birthDate = this.birthDate;
    this.userData.firstVaccDate = this.firstVaccDate;
  }

}
