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

  nome: string;

  cliente: Cliente;

  constructor(private servico: ClienteService) { }

  ngOnInit() { 
    this.cliente = new Cliente();
  }

  onSubmit() {

    console.log("CHAMOU METODO SUBMIT - ");
    
    console.log(this.nome);

    console.log(this.cliente);

    this.servico.salvar(this.cliente);
    this.cliente = new Cliente();
  }

}
