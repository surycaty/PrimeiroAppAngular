import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from './model/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  urlClienteRest = "http://localhost:8080/cliente/listar";

  formData : Cliente;

  retorno: any;

  constructor(private http : HttpClient ) { }

  listarClientes(){
    return this.http.get<any>(`${this.urlClienteRest}`);
  }

  salvar(cliente: Cliente) {
    console.log("Inicio Salvar Servico");
    cliente.risco = 'A';
    this.http.post("http://localhost:8080/cliente/salvar", cliente).subscribe(res => this.retorno = res);

    console.log(this.retorno);
  }
}
