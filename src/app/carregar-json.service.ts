import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarregarJsonService {

  constructor(private http: HttpClient) { }

  carregarDadosForaHotel(): Promise<any> {
    return this.http.get('assets/foraHotel.json').toPromise();
  }

  carregarDadosNoHotel(): Promise<any> {
    return this.http.get('assets/noHotel.json').toPromise();
  }

  carregarPessoas():Promise<any> {
    return this.http.get('assets/pessoas.json').toPromise();
  }
}
