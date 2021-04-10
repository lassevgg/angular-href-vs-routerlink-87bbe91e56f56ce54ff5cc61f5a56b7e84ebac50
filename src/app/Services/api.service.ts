import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

let JwtToken: string;

var httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

// betyder at den kan benyttes til Dependency injection
@Injectable({
  providedIn: 'root'
})

export class APIService {
  adminUser: AdminUser;

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


setJwtToken(elevatedUser:AdminUser){
  //adminuser properties var ikke skrevet med camel-case og derfor gad den ikke overføre noget fra result...
  console.log(elevatedUser);
  this.adminUser = elevatedUser;
  JwtToken = elevatedUser.jwtToken
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + JwtToken
    })
  }

  console.log("Jwt token has been set to: " + JwtToken);
}


//#region Auditorium
getAuditoriumList():Observable<Auditorium[]>{
  return this.http.get<Auditorium[]>(this.urlAPIAuditorium);}

postAuditorium(newAuditoriumData: Auditorium):Observable<boolean>{
  return this.http.post<boolean>(this.urlAPIAuditorium + '/Auditorium', newAuditoriumData, httpOptions);}

putAuditorium(updateAuditoriumData: Auditorium):Observable<boolean>{
  return this.http.put<boolean>(this.urlAPIAuditorium + '/Auditorium', updateAuditoriumData, httpOptions);}

// deleteGenre(deleteGenreID: Genre):Observable<Genre>{
//   return this.http.delete<Genre>(this.urlAPIGenre, deleteGenreID, httpOptions);}
//#endregion

//#region Employee
getEmployeeList():Observable<Employee[]>{
  return this.http.get<Employee[]>(this.urlAPIEmployee);}

getEmployeeLogin(username:string, password:string):Observable<Employee[]>{
  return this.http.get<Employee[]>(this.urlAPIEmployee + '/' + username + '/' + password);}

postEmployee(newEmployeeData: Employee):Observable<Employee>{
  return this.http.post<Employee>(this.urlAPIEmployee + '/Employee', newEmployeeData, httpOptions);}

putEmployee(updateEmployeeData: Employee):Observable<Employee>{
  return this.http.put<Employee>(this.urlAPIEmployee + '/Employee', updateEmployeeData, httpOptions);}

//deleteEmployee(deleteEmployeeData: Employee):Observable<Employee>{
//  return this.http.delete<Employee>(this.urlAPIEmployee, deleteEmployeeData, httpOptions);}

authenticateEmployee(employee: Employee):Observable<AdminUser>{
  return this.http.post<AdminUser>(this.urlAPIAuthenticate, employee, httpOptions);}

// authenticateEmployee(employee:Employee):Observable<Employee>{
//   return this.http.post<Employee>(`${this.urlAPIAuthenticate}/employee, httpOptions);}
//#endregion

//#region Genre
getGenreList():Observable<Genre[]>{
  return this.http.get<Genre[]>(this.urlAPIGenre, httpOptions);}

postGenre(newGenreData: Genre):Observable<boolean>{
  return this.http.post<boolean>(this.urlAPIGenre + '/genre', newGenreData, httpOptions);}

putGenre(updateGenreData: Genre):Observable<boolean>{
  return this.http.put<boolean>(this.urlAPIGenre + '/genre', updateGenreData, httpOptions);}
  
//delete kan ikke tage body men har brug for det? kan sende via dette trick men det bliver altid ID 0 ovre i API'et.
//muligvis bruge en post til at slette?
deleteGenre(deleteGenreID: Genre):Observable<boolean>{
  var deletehttpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + JwtToken
    }),
    body:{
      id: deleteGenreID,
      type: null
    },
  }
  return this.http.delete<boolean>(this.urlAPIGenre + '/genre', deletehttpOptions);}
//#endregion

//#region Movie
getMovieList():Observable<Movie[]>{
  return this.http.get<Movie[]>(this.urlAPIMovie);}

postMovie(newMovieData: Movie):Observable<boolean>{
  return this.http.post<boolean>(this.urlAPIMovie + '/movie', newMovieData, httpOptions);}

putMovie(updateMovieData: Movie):Observable<boolean>{
  return this.http.put<boolean>(this.urlAPIMovie + '/movie', updateMovieData, httpOptions);}

// deleteGenre(deleteGenreID: Genre):Observable<Genre>{
//   return this.http.delete<Genre>(this.urlAPIGenre, deleteGenreID, httpOptions);}
//#endregion

//#region Reservation
getReservationList():Observable<Reservation[]>{
  return this.http.get<Reservation[]>(this.urlAPIReservation);}

postReservation(newReservationData: Reservation):Observable<Reservation>{
  return this.http.post<Reservation>(this.urlAPIReservation + '/Reservation', newReservationData, httpOptions);}

putReservation(updateReservationData: Reservation):Observable<Reservation>{
  return this.http.put<Reservation>(this.urlAPIReservation + '/Reservation', updateReservationData, httpOptions);}

// deleteGenre(deleteGenreID: Genre):Observable<Genre>{
//   return this.http.delete<Genre>(this.urlAPIGenre, deleteGenreID, httpOptions);}
//#endregion

//#region ReservationType
getReservationTypeList():Observable<ReservationType[]>{
  return this.http.get<ReservationType[]>(this.urlAPIReservationType);}

postReservationType(newReservationTypeData: ReservationType):Observable<ReservationType>{
  return this.http.post<ReservationType>(this.urlAPIReservationType + '/ReservationType', newReservationTypeData, httpOptions);}

putReservationType(updateReservationTypeData: ReservationType):Observable<ReservationType>{
  return this.http.put<ReservationType>(this.urlAPIReservationType + '/ReservationType', updateReservationTypeData, httpOptions);}

// deleteGenre(deleteGenreID: Genre):Observable<Genre>{
//   return this.http.delete<Genre>(this.urlAPIGenre, deleteGenreID, httpOptions);}
//#endregion

//#region Screening
getScreeningList():Observable<Screening[]>{
  return this.http.get<Screening[]>(this.urlAPIScreening);}

postScreening(newScreeningData: Screening):Observable<boolean>{
  return this.http.post<boolean>(this.urlAPIScreening + '/Screening', newScreeningData, httpOptions);}

putScreening(updateScreeningData: Screening):Observable<boolean>{
  return this.http.put<boolean>(this.urlAPIScreening + '/Screening', updateScreeningData, httpOptions);}

// deleteGenre(deleteGenreID: Genre):Observable<Genre>{
//   return this.http.delete<Genre>(this.urlAPIGenre, deleteGenreID, httpOptions);}
//#endregion

//#region Seat
getSeatList():Observable<Seat[]>{
  return this.http.get<Seat[]>(this.urlAPISeat);}

getSeatsOnAuditorimId(auditoriumId: number):Observable<Seat[]>{
  return this.http.get<Seat[]>(this.urlAPISeat + "/ListSeatsOnAuditoriumId/" + auditoriumId);}

postSeat(newSeatData: Seat):Observable<Seat>{
  return this.http.post<Seat>(this.urlAPISeat + '/Seat', newSeatData, httpOptions);}

putSeat(updateSeatData: Seat):Observable<Seat>{
  return this.http.put<Seat>(this.urlAPISeat + '/Seat', updateSeatData, httpOptions);}

// deleteGenre(deleteGenreID: Genre):Observable<Genre>{
//   return this.http.delete<Genre>(this.urlAPIGenre, deleteGenreID, httpOptions);}
//#endregion

//#region SeatReserved
getSeatReservedList():Observable<SeatReserved[]>{
  return this.http.get<SeatReserved[]>(this.urlAPISeatReserved);}

postSeatReserved(newSeatReservedData: SeatReserved):Observable<SeatReserved>{
  return this.http.post<SeatReserved>(this.urlAPISeatReserved + '/SeatReserved', newSeatReservedData, httpOptions);}

putSeatReserved(updateSeatReservedData: SeatReserved):Observable<SeatReserved>{
  return this.http.put<SeatReserved>(this.urlAPISeatReserved + '/SeatReserved', updateSeatReservedData, httpOptions);}

// deleteGenre(deleteGenreID: Genre):Observable<Genre>{
//   return this.http.delete<Genre>(this.urlAPIGenre, deleteGenreID, httpOptions);}
//#endregion


}
