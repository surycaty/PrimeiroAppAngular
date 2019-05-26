import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarClientesComponent } from './listar-clientes/listar-clientes.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EditarComponent } from './editar/editar.component';
import { EmprestimoComponent } from './emprestimo/emprestimo.component';

const routes: Routes = [
  {path: 'listar', component : ListarClientesComponent},
  {path: 'cadastrar', component : CadastrarComponent},
  {path: 'editar/:id', component : EditarComponent},
  {path: 'simular/:id', component : EmprestimoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
