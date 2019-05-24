import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emprestimo',
  templateUrl: './emprestimo.component.html',
  styleUrls: ['../app.component.css']
})
export class EmprestimoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /**
	 * Calcular Emprestimo baseado na 
	 * Fórmula do cálculo do coeficiente de financiamento
	 * 
	 */
  calcularEmprestimo(emprestimo){

		if( emprestimo.riscoCliente != null && emprestimo.riscoCliente == "A") {
			emprestimo.setTaxaJuros(1.9);
		} else if( emprestimo.riscoCliente != null && emprestimo.riscoCliente == "B") {
			emprestimo.setTaxaJuros(5.0);
		} else {
			emprestimo.setTaxaJuros(10.0);
		}
		
		var tx = emprestimo.taxaJuros/100;
		var valorExpo = Math.pow(1+(tx), emprestimo.numeroParcela);
		
		var cf = ( (tx) / (1 - (1 / valorExpo)) );

		emprestimo.valorParcela = (this.arredondar(emprestimo.getValorEmprestimo() * cf));
		emprestimo.valorCalculado = (this.arredondar(emprestimo.getValorParcela() * emprestimo.getNumeroParcela()));

    return emprestimo;
    
  }

    /**
	 * Arredondar para 2 casas decimais
	 * 
	 * @param valor
	 * @return
	 */
	arredondar(valor) {
		/*DecimalFormat df = new DecimalFormat("0.00", DecimalFormatSymbols.getInstance(Locale.ENGLISH));
		df.setRoundingMode(RoundingMode.HALF_UP);
		return new Double(df.format(valor));*/

  }

}
