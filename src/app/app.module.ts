import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { StartMenuComponent } from './components/start-menu/start-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewCalendarComponent } from './components/new-calendar/new-calendar.component';
import { LoadCalendarComponent } from './components/load-calendar/load-calendar.component';
import {FormsModule} from "@angular/forms";
import { VaccineSelectorComponent } from './components/vaccine-selector/vaccine-selector.component';
import { CalendarComponent } from './components/calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StartMenuComponent,
    NewCalendarComponent,
    LoadCalendarComponent,
    VaccineSelectorComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
