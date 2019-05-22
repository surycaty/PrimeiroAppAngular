import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from './model/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  urlClienteRest = "http://localhost:8080/cliente/listar";

  formData : Cliente;

  constructor(private http : HttpClient ) { }

  listarClientes(){
    return this.http.get<any>(`${this.urlClienteRest}`);
  }
}
