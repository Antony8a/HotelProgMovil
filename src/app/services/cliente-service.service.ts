import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { tap, catchError, map } from 'rxjs/operators';
import { Observable, of, observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {

  constructor( private http: HttpClient) { }

  get(){
    return this.http.get('https://localhost:5001/api/cliente');
  }

  post(cliente: Cliente):Observable<Cliente> {
    console.log(cliente);
    return this.http.post<Cliente>('https://localhost:5001/api/cliente', cliente);
  }

  add(dataToSend){
    var url ="https://localhost:5001/api/cliente";
    return this.http.post(url,dataToSend,
      {headers:new HttpHeaders(
        {"content-Type":"application/json"}
      )});

  }


  postw(cliente:Cliente){
    
    this.http.post("https://localhost:5001/api/cliente", cliente)
      .subscribe(data => {
        console.log('usuario registrado con exito')
        console.log(data['_body']);
       }, error => {
        console.log(error);
      });
  }

}
