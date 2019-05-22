import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarClientesComponent } from './listar-clientes/listar-clientes.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';

const routes: Routes = [
  {path: 'listar', component : ListarClientesComponent},
  {path: 'cadastrar', component : CadastrarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
