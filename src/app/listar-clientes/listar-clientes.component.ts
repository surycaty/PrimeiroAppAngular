import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['../app.component.css']
})
export class ListarClientesComponent implements OnInit {

  clientes : Array<any>;

  constructor(private servico : ClienteService) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.servico.listarClientes().subscribe(dados => this.clientes = dados);
  }

}
