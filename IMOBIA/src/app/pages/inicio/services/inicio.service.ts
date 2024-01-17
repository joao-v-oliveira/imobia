import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  private api = environment.APIEndpoint;
  private header: HttpHeaders;

  inicializarHeader(){
    this.header = new HttpHeaders({
      'Content-Type':'application/json',
    });
  }

  constructor(private http: HttpClient) { }

  getImoveis() {
    this.inicializarHeader();
    return this.http.get(`${this.api}imoveis`, { headers: this.header });
  }
}

