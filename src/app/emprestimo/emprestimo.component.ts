import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Emprestimo } from '../model/emprestimo.model';
import { Cliente } from '../model/cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-emprestimo',
  templateUrl: './emprestimo.component.html',
  styleUrls: ['../app.component.css']
})
export class EmprestimoComponent implements OnInit {

	idCliente: number;
	cliente: Cliente;
	emprestimo: Emprestimo;
	isCalculado = false;

  constructor(private route: ActivatedRoute, private servico: ClienteService) { }

  ngOnInit() {

		this.cliente = new Cliente();
		this.emprestimo = new Emprestimo();

    this.route.params.subscribe(p => this.idCliente = p.id);

    this.servico.getCliente(this.idCliente).subscribe((cliente: Cliente) =>  {
			this.cliente = cliente;

			this.emprestimo.riscoCliente = this.cliente.risco;

    });
  }

  /**
	 * Calcular Emprestimo baseado na 
	 * Fórmula do cálculo do coeficiente de financiamento
	 */
  onSubmit(){
		console.log("inicio Calcular Emprestimo");
		if( this.emprestimo.riscoCliente != null && this.emprestimo.riscoCliente == "A") {
			this.emprestimo.taxaJuros = 1.9;
		} else if( this.emprestimo.riscoCliente != null && this.emprestimo.riscoCliente == "B") {
			this.emprestimo.taxaJuros = 5.0;
		} else {
			this.emprestimo.taxaJuros = 10.0;
		}
		
		var tx = this.emprestimo.taxaJuros/100;
		var valorExpo = Math.pow(1+(tx), this.emprestimo.numeroParcela);
		
		var cf = ( (tx) / (1 - (1 / valorExpo)) );

		this.emprestimo.valorParcela = (this.arredondar(this.emprestimo.valorEmprestimo * cf));
		this.emprestimo.valorCalculado = (this.arredondar(this.emprestimo.valorParcela * this.emprestimo.numeroParcela));

		this.isCalculado = true;
    
  }

    /**
	 * Arredondar para 2 casas decimais
	 * 
	 * @param valor
	 * @return
	 */
	arredondar(valor: number) {
		return Number.parseFloat(valor.toFixed(2));
		
  }

}
