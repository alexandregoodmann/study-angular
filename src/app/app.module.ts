import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { ModalComponent } from './modal/modal.component';
import { UsaModalComponent } from './usa-modal/usa-modal.component';
import { FiltroNotificacoesComponent } from './filtro-notificacoes/filtro-notificacoes.component';

@NgModule({
  declarations: [
    AppComponent,
    PessoaComponent,
    ModalComponent,
    UsaModalComponent,
    FiltroNotificacoesComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
