import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-calendar',
  templateUrl: './new-calendar.component.html',
  styleUrls: ['./new-calendar.component.css']
})
export class NewCalendarComponent {
  agreement1: boolean = false;
  name: string = "";
  birthDate: string = "";
  firstVaccDate: string = "";

  incorrectName: boolean = false;
  incorrectBirthDate: boolean = false;
  incorrectVaccDate: boolean = false;
  agreementNotChecked: boolean = false;

  constructor(private readonly router: Router) {
  }
  showSomething() {
    console.log(this.name);
    console.log(this.birthDate);
    console.log(this.firstVaccDate);

  }

  createCalendar() {
    if (this.validateInput()) {
      console.log('jest ok');
      this.router.navigate(['select']);
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

}
