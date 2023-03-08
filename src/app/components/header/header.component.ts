import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Router} from "@angular/router";
import {UserDataService} from "../../services/user-data.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{



//TODO: make this fields observable
  isSelectorActive: boolean = false;
  isCalendarActive: boolean = false;

  constructor(private readonly router: Router,
  private readonly userData: UserDataService) {
  }

  ngOnInit(): void {
    this.userData.selectedIsSelectorActive$.subscribe((value)=>{
      this.isSelectorActive=value;
    });

    this.userData.selectedIsCalendarActive$.subscribe((value)=>{
      this.isCalendarActive=value;
    });
  }
  redirect(s: string){
    this.router.navigate([s])
  }





}
