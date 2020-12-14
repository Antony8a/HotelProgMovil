import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habitacion } from '../models/habitacion';

@Injectable({
  providedIn: 'root'
})
export class HabitacionServiceService {

  baseUrl: string;
  constructor( 
    private http: HttpClient
    ) { }

    get(): Observable<Habitacion[]> {
      return this.http.get<Habitacion[]>('https://localhost:5001/api/Habitacion')
    }

  /** GET Habitacion by idHabitacion. Will 404 if id not found */
    getId(id: string): Observable<Habitacion> {
      const url = `${'https://localhost:5001/api/Habitacion'}/${id}`;
      return this.http.get<Habitacion>(url)
    }
  
  /** POST: post the hero from the server */
    post(Habitacion: Habitacion): Observable<Habitacion> {
      return this.http.post<Habitacion>('https://localhost:5001/api/Habitacion', Habitacion)
    }

  /** DELETE: delete the hero from the server */
    delete(habitacion: Habitacion | string): Observable<string> {
      const id = typeof habitacion === 'string' ? habitacion : habitacion.idHabitacion;
      return this.http.delete<string>('https://localhost:5001/api/Habitacion/' + id)
    }

  /** PUT: update the profesor on the server */
    put(habitacion: Habitacion): Observable<any> {
      const url = `${'https://localhost:5001/api/Habitacion'}/${habitacion.idHabitacion}`;
    return this.http.put(url, habitacion);
    }
}
