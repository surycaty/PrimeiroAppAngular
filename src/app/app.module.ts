import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarClientesComponent } from './listar-clientes/listar-clientes.component';
import { ClienteService } from './cliente.service';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { NgForm } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListarClientesComponent,
    NavbarComponent,
    CadastrarComponent,
    NgForm
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ ClienteService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
