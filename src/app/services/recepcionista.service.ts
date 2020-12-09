import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recepcionista } from '../models/recepcionista';

@Injectable({
  providedIn: 'root'
})
export class RecepcionistaService {

  baseUrl: string;
  constructor( 
    private http: HttpClient
    ) { }

    get(): Observable<Recepcionista[]> {
      return this.http.get<Recepcionista[]>('https://localhost:5001/api/Recepcionista')
    }

  /** GET Recepcionista by identificacion. Will 404 if id not found */
    getId(id: string): Observable<Recepcionista> {
      const url = `${'https://localhost:5001/api/Recepcionista'}/${id}`;
      return this.http.get<Recepcionista>(url)
    }
  
  /** POST: post the hero from the server */
    post(Recepcionista: Recepcionista): Observable<Recepcionista> {
      return this.http.post<Recepcionista>('https://localhost:5001/api/Recepcionista', Recepcionista)
    }

  /** DELETE: delete the hero from the server */
    delete(recepcionista: Recepcionista | string): Observable<string> {
      const id = typeof recepcionista === 'string' ? recepcionista : recepcionista.identificacion;
      return this.http.delete<string>('https://localhost:5001/api/Recepcionista/' + id)
    }

  /** PUT: update the profesor on the server */
    put(recepcionista: Recepcionista): Observable<any> {
      const url = `${'https://localhost:5001/api/Recepcionista'}/${recepcionista.identificacion}`;
    return this.http.put(url, recepcionista);
    }
}
