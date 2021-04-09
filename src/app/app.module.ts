import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GenreComponent } from './genre/genre.component';
import { EmployeeComponent } from './employee/employee.component';
import { MovieComponent } from './movie/movie.component';

const appRoutes: Routes = [
  { path: 'genre', component: GenreComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GenreComponent,
    EmployeeComponent,
    MovieComponent
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
