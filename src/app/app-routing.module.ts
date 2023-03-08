import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StartMenuComponent} from "./components/start-menu/start-menu.component";
import {VaccineSelectorComponent} from "./components/vaccine-selector/vaccine-selector.component";

const routes: Routes = [
  {path: '', component: StartMenuComponent},
  {path: 'select', component: VaccineSelectorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
