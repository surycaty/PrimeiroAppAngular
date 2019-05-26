import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from './model/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  urlClienteRoot = "http://localhost:8080/cliente";

  retorno: any;

  constructor(private http : HttpClient ) { }

  listarClientes(){
    return this.http.get<any>(`${this.urlClienteRoot + "/listar"}`);
  }

  salvar(cliente: Cliente) {
    return this.http.post(this.urlClienteRoot + "/salvar", cliente).subscribe(res => this.retorno = res);
  }

  getCliente(id: number) {
    return this.http.get(this.urlClienteRoot + "/consultar?id=" + id);
  }
}
