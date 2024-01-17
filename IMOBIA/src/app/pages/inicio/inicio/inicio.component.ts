import { Component, OnInit } from '@angular/core';
import { InicioService } from '../services/inicio.service';
import { Imovel } from '../model/inicio';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  public imoveis: Imovel[]=[];

  constructor(private incioService: InicioService) {

  }

  ngOnInit(): void {
    this.incioService.getImoveis().subscribe(
      (dados) => {
        this.imoveis = dados['imoveis'];
      }
    )
  }
}
