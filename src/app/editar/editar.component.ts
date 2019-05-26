import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../model/cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['../app.component.css']
})
export class EditarComponent implements OnInit {

  cliente: Cliente;
  mostrarTipoCliente: string;

  idPag: any;

  constructor(private route: ActivatedRoute, private servico: ClienteService) { }

  ngOnInit() {

    this.cliente = new Cliente();

    this.mostrarTipoCliente = "";

    this.route.params.subscribe(p => this.idPag = p.id);

    this.servico.getCliente(this.idPag).subscribe((cliente: Cliente) =>  {
      this.cliente = cliente;
      this.mostrarTipoCliente = this.cliente.tipoCliente;
    });

  }

  onSubmit() {

    this.servico.salvar(this.cliente);
    
  }

  atualizarTipo(tipo: string){
    this.mostrarTipoCliente = tipo;
  }

  atualizarRisco(renda: number) {
    if(renda <= 2000){
      this.cliente.risco = "C";
    } else if (renda <= 8000) {
      this.cliente.risco = "B";
    } else {
      this.cliente.risco = "A";
    }
  }

}
