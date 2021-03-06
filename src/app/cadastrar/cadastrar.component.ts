import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Cliente } from '../model/cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['../app.component.css']
})

export class CadastrarComponent implements OnInit {

  mostrarTipoCliente: string;

  cliente: Cliente;

  constructor(private servico: ClienteService) { }

  ngOnInit() { 
    this.cliente = new Cliente();
    this.mostrarTipoCliente = "";
  }

  onSubmit() {
    this.servico.salvar(this.cliente);
    this.cliente = new Cliente();
  }

  atualizarTipo(tipo){
    this.mostrarTipoCliente = tipo;
  }
  

  atualizarRisco(renda) {
    console.log(renda);
    this.cliente.risco = 'A'

    if(renda <= 2000){
      this.cliente.risco = "C";
    } else if (renda <= 8000) {
      this.cliente.risco = "B";
    } else {
      this.cliente.risco = "A";
    }
  }

}
