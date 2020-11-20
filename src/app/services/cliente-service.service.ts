import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { tap, catchError, map } from 'rxjs/operators';
import { Observable, of, observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {

  baseUrl: string;
  constructor( 
    private http: HttpClient
    ) { }

    get(): Observable<Cliente[]> {
      return this.http.get<Cliente[]>('https://localhost:5001/api/Cliente')
    }

  /** GET Cliente by identificacion. Will 404 if id not found */
    getId(id: string): Observable<Cliente> {
      const url = `${'https://localhost:5001/api/Cliente'}/${id}`;
      return this.http.get<Cliente>(url)
    }
  
  /** POST: post the hero from the server */
    post(Cliente: Cliente): Observable<Cliente> {
      return this.http.post<Cliente>('https://localhost:5001/api/Cliente', Cliente)
    }

  /** DELETE: delete the hero from the server */
    delete(cliente: Cliente | string): Observable<string> {
      const id = typeof cliente === 'string' ? cliente : cliente.identificacion;
      return this.http.delete<string>('https://localhost:5001/api/Cliente/' + id)
    }

  /** PUT: update the profesor on the server */
    put(cliente: Cliente): Observable<any> {
      const url = `${'https://localhost:5001/api/Cliente'}/${cliente.identificacion}`;
    return this.http.put(url, cliente);
    }
}
