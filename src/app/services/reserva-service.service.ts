import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserva } from '../models/reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservaServiceService {

  baseUrl: string;
  constructor( 
    private http: HttpClient
    ) { }

    get(): Observable<Reserva[]> {
      return this.http.get<Reserva[]>('https://localhost:5001/api/Reserva')
    }

  /** GET Reserva by idReserva. Will 404 if id not found */
    getId(id: string): Observable<Reserva> {
      const url = `${'https://localhost:5001/api/Reserva'}/${id}`;
      return this.http.get<Reserva>(url)
    }
  
  /** POST: post the hero from the server */
    post(Reserva: Reserva): Observable<Reserva> {
      return this.http.post<Reserva>('https://localhost:5001/api/Reserva', Reserva)
    }

  /** DELETE: delete the hero from the server */
    delete(reserva: Reserva | string): Observable<string> {
      const id = typeof reserva === 'string' ? reserva : reserva.idReserva;
      return this.http.delete<string>('https://localhost:5001/api/Reserva/' + id)
    }

  /** PUT: update the profesor on the server */
    put(reserva: Reserva): Observable<any> {
      const url = `${'https://localhost:5001/api/Reserva'}/${reserva.idReserva}`;
    return this.http.put(url, reserva);
    }
}
