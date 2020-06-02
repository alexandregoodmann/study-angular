import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtro-notificacoes',
  templateUrl: './filtro-notificacoes.component.html',
  styleUrls: ['./filtro-notificacoes.component.scss']
})
export class FiltroNotificacoesComponent implements OnInit {

  fechado = true;

  constructor() { }

  ngOnInit() {
    this.fechar();
  }

  mudar() {
    if (this.fechado) {
      this.abrir();
      this.fechado = false;
    } else {
      this.fechar();
      this.fechado = true;
    }
  }

  abrir() {
    document.getElementById("filtroNotificacoesContainer").style.width = "400px";
    document.getElementById("s-filtro-content").style.display = "block";
  }

  fechar() {
    document.getElementById("filtroNotificacoesContainer").style.width = "0";
    document.getElementById("s-filtro-content").style.display = "none";
  }
}
