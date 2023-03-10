import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StartMenuComponent} from "./components/start-menu/start-menu.component";
import {VaccineSelectorComponent} from "./components/vaccine-selector/vaccine-selector.component";
import {CalendarComponent} from "./components/calendar/calendar.component";

const routes: Routes = [
  {path: '', component: StartMenuComponent},
  {path: 'selector', component: VaccineSelectorComponent},
  {path: 'calendar', component: CalendarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
