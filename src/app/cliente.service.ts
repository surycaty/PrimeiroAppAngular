import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from './model/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  urlClienteRoot = "http://localhost:8080/cliente";

  //formData : Cliente;

  retorno: any;

  constructor(private http : HttpClient ) { }

  listarClientes(){
    return this.http.get<any>(`${this.urlClienteRoot + "/listar"}`);
  }

  salvar(cliente: Cliente) {
    console.log("Inicio Salvar Servico");
    
    this.http.post(this.urlClienteRoot + "/salvar", cliente).subscribe(res => this.retorno = res);

    console.log(this.retorno);
  }

  getCliente(id) {
    return this.http.get(this.urlClienteRoot + "/consultar?id=" + id);
  }
}
