import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StartMenuComponent} from "./components/start-menu/start-menu.component";

const routes: Routes = [
  {path: '', component: StartMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
