import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['../app.component.css']
})
export class CadastrarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  salvar(){
    console.log("CHAMOU METODO SALVAR");
  }

}
