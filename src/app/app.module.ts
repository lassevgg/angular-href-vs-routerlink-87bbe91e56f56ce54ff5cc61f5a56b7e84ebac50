import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GenreComponent } from './genre/genre.component';
import { EmployeeComponent } from './employee/employee.component';
import { MovieComponent } from './movie/movie.component';
import { ScreeningComponent } from './screening/screening.component';
import { AuditoriumComponent } from './auditorium/auditorium.component';
import { SeatComponent } from './seat/seat.component';
import { SeatReservedComponent } from './seat-reserved/seat-reserved.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ReservationTypeComponent } from './reservation-type/reservation-type.component';

const appRoutes: Routes = [
  { path: 'genre', component: GenreComponent },
  { path: 'movie', component: MovieComponent },
  { path: 'screening', component: ScreeningComponent },
  { path: 'auditorium', component: AuditoriumComponent },
  { path: 'seat', component: SeatComponent },
  { path: 'seatReserved', component: SeatReservedComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'reservation-type', component: ReservationTypeComponent },
  { path: 'employee', component: EmployeeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GenreComponent,
    EmployeeComponent,
    MovieComponent,
    ScreeningComponent,
    AuditoriumComponent,
    SeatComponent,
    SeatReservedComponent,
    ReservationComponent,
    ReservationTypeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
