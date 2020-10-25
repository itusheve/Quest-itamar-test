import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { WorkersComponent } from './workers/workers.component';
import { FlightsComponent } from './flights/flights.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { TimePipe } from './time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WorkersComponent,
    FlightsComponent,
    FlightDetailsComponent,
    TimePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
