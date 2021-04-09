import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { AdminUser } from '../Models/AdminUser';
import { Auditorium } from '../Models/Auditorium';
import { Employee } from '../Models/Employee';
import { Genre } from '../Models/Genre';
import { Movie } from '../Models/Movie';
import { Reservation } from '../Models/Reservation';
import { ReservationType } from '../Models/ReservationType';
import { Screening } from '../Models/Screening';
import { Seat } from '../Models/Seat';
import { SeatReserved } from '../Models/SeatReserved';

//lav dynamisk
let JwtToken: string;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': "Bearer " + JwtToken
  })
}

// betyder at den kan benyttes til Dependency injection
@Injectable({
  providedIn: 'root'
})

export class APIService {
  urlAPIAuditorium:string = "https://localhost:44366/Auditorium";
  urlAPIEmployee:string = "https://localhost:44366/Employee";
  urlAPIGenre:string = "https://localhost:44366/Genre";
  urlAPIMovie:string = "https://localhost:44366/Movie";
  urlAPIReservation:string = "https://localhost:44366/Reservation";
  urlAPIReservationType:string = "https://localhost:44366/ReservationType";
  urlAPIScreening:string = "https://localhost:44366/Screening";
  urlAPISeat:string = "https://localhost:44366/Seat";
  urlAPISeatReserved:string = "https://localhost:44366/SeatReserved";
  urlAPIAuthenticate:string = "https://localhost:44366/Authentication";

  constructor(private http:HttpClient) { }


setJwtToken(token:string) : string{
  JwtToken = token;
  return JwtToken;
}


//#region Auditorium
getAuditoriumList():Observable<Auditorium[]>{
  return this.http.get<Auditorium[]>(this.urlAPIAuditorium);}

postAuditorium(newAuditoriumData: Auditorium):Observable<Auditorium>{
  return this.http.post<Auditorium>(this.urlAPIAuditorium, newAuditoriumData, httpOptions);}

putAuditorium(updateAuditoriumData: Auditorium):Observable<Auditorium>{
  return this.http.put<Auditorium>(this.urlAPIAuditorium, updateAuditoriumData, httpOptions);}

// deleteGenre(deleteGenreID: Genre):Observable<Genre>{
//   return this.http.delete<Genre>(this.urlAPIGenre, deleteGenreID, httpOptions);}
//#endregion

//#region Employee
getEmployeeList():Observable<Employee[]>{
  return this.http.get<Employee[]>(this.urlAPIEmployee);}

getEmployeeLogin(username:string, password:string):Observable<Employee[]>{
  return this.http.get<Employee[]>(this.urlAPIEmployee + '/' + username + '/' + password);}

postEmployee(newEmployeeData: Employee):Observable<Employee>{
  return this.http.post<Employee>(this.urlAPIEmployee, newEmployeeData, httpOptions);}

putEmployee(updateEmployeeData: Employee):Observable<Employee>{
  return this.http.put<Employee>(this.urlAPIEmployee, updateEmployeeData, httpOptions);}

//deleteEmployee(deleteEmployeeData: Employee):Observable<Employee>{
//  return this.http.delete<Employee>(this.urlAPIEmployee, deleteEmployeeData, httpOptions);}

authenticateEmployee(employee: Employee):Observable<AdminUser>{
  return this.http.post<AdminUser>(this.urlAPIAuthenticate, employee, httpOptions);}

// authenticateEmployee(employee:Employee):Observable<Employee>{
//   return this.http.post<Employee>(`${this.urlAPIAuthenticate}/employee, httpOptions);}
//#endregion

//#region Genre
getGenreList():Observable<Genre[]>{
  return this.http.get<Genre[]>(this.urlAPIGenre);}

postGenre(newGenreData: Genre):Observable<boolean>{
  return this.http.post<boolean>(this.urlAPIGenre + '/genre', newGenreData, httpOptions);}

putGenre(updateGenreData: Genre):Observable<boolean>{
  return this.http.put<boolean>(this.urlAPIGenre + '/genre', updateGenreData, httpOptions);}
  

deleteGenre(deleteGenreID: Genre):Observable<boolean>{
  var options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    body:{
      Id: deleteGenreID.id,
      Type: null
    },
  };
  return this.http.delete<boolean>(this.urlAPIGenre + '/genre', options);}
//#endregion

//#region Movie
getMovieList():Observable<Movie[]>{
  return this.http.get<Movie[]>(this.urlAPIMovie);}

postMovie(newMovieData: Movie):Observable<Movie>{
  return this.http.post<Movie>(this.urlAPIMovie, newMovieData, httpOptions);}

putMovie(updateMovieData: Movie):Observable<Movie>{
  return this.http.put<Movie>(this.urlAPIMovie, updateMovieData, httpOptions);}

// deleteGenre(deleteGenreID: Genre):Observable<Genre>{
//   return this.http.delete<Genre>(this.urlAPIGenre, deleteGenreID, httpOptions);}
//#endregion

//#region Reservation
getReservationList():Observable<Reservation[]>{
  return this.http.get<Reservation[]>(this.urlAPIReservation);}

postReservation(newReservationData: Reservation):Observable<Reservation>{
  return this.http.post<Reservation>(this.urlAPIReservation, newReservationData, httpOptions);}

putReservation(updateReservationData: Reservation):Observable<Reservation>{
  return this.http.put<Reservation>(this.urlAPIReservation, updateReservationData, httpOptions);}

// deleteGenre(deleteGenreID: Genre):Observable<Genre>{
//   return this.http.delete<Genre>(this.urlAPIGenre, deleteGenreID, httpOptions);}
//#endregion

//#region ReservationType
getReservationTypeList():Observable<ReservationType[]>{
  return this.http.get<ReservationType[]>(this.urlAPIReservationType);}

postReservationType(newReservationTypeData: ReservationType):Observable<ReservationType>{
  return this.http.post<ReservationType>(this.urlAPIReservationType, newReservationTypeData, httpOptions);}

putReservationType(updateReservationTypeData: ReservationType):Observable<ReservationType>{
  return this.http.put<ReservationType>(this.urlAPIReservationType, updateReservationTypeData, httpOptions);}

// deleteGenre(deleteGenreID: Genre):Observable<Genre>{
//   return this.http.delete<Genre>(this.urlAPIGenre, deleteGenreID, httpOptions);}
//#endregion

//#region Screening
getScreeningList():Observable<Screening[]>{
  return this.http.get<Screening[]>(this.urlAPIReservationType);}

postScreening(newScreeningData: Screening):Observable<Screening>{
  return this.http.post<Screening>(this.urlAPIScreening, newScreeningData, httpOptions);}

putScreening(updateScreeningData: Screening):Observable<Screening>{
  return this.http.put<Screening>(this.urlAPIScreening, updateScreeningData, httpOptions);}

// deleteGenre(deleteGenreID: Genre):Observable<Genre>{
//   return this.http.delete<Genre>(this.urlAPIGenre, deleteGenreID, httpOptions);}
//#endregion

//#region Seat
getSeatList():Observable<Seat[]>{
  return this.http.get<Seat[]>(this.urlAPISeat);}

getSeatsOnAuditorimId(auditoriumId: number):Observable<Seat[]>{
  return this.http.get<Seat[]>(this.urlAPISeat + "/ListSeatsOnAuditoriumId/" + auditoriumId);}

postSeat(newSeatData: Seat):Observable<Seat>{
  return this.http.post<Seat>(this.urlAPISeat, newSeatData, httpOptions);}

putSeat(updateSeatData: Seat):Observable<Seat>{
  return this.http.put<Seat>(this.urlAPISeat, updateSeatData, httpOptions);}

// deleteGenre(deleteGenreID: Genre):Observable<Genre>{
//   return this.http.delete<Genre>(this.urlAPIGenre, deleteGenreID, httpOptions);}
//#endregion

//#region SeatReserved
getSeatReservedList():Observable<SeatReserved[]>{
  return this.http.get<SeatReserved[]>(this.urlAPISeatReserved);}

postSeatReserved(newSeatReservedData: SeatReserved):Observable<SeatReserved>{
  return this.http.post<SeatReserved>(this.urlAPISeatReserved, newSeatReservedData, httpOptions);}

putSeatReserved(updateSeatReservedData: SeatReserved):Observable<SeatReserved>{
  return this.http.put<SeatReserved>(this.urlAPISeatReserved, updateSeatReservedData, httpOptions);}

// deleteGenre(deleteGenreID: Genre):Observable<Genre>{
//   return this.http.delete<Genre>(this.urlAPIGenre, deleteGenreID, httpOptions);}
//#endregion


}
