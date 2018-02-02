import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';

import { APIUrl } from './../app.api';

import { RegiaoModel } from './../models/regiao.model';

@Injectable()
export class RegiaoService {

  private headers: Headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private httpClient: HttpClient) { }

  criar(regiao: RegiaoModel): Observable<RegiaoModel> {
    return this.httpClient.post<RegiaoModel>(`${APIUrl}/regioes/criar`, regiao);
  }

  atualizar(idRegiao: number, regiao: RegiaoModel): Observable<RegiaoModel> {
    return this.httpClient.put<RegiaoModel>(`${APIUrl}/regioes/atualizar/${idRegiao}`, regiao);
  }

  buscarPorId(idRegiao: number): Observable<RegiaoModel> {
    return this.httpClient.get<RegiaoModel>(`${APIUrl}/regioes/buscar/${idRegiao}`);
  }

  buscarTodos(): Observable<RegiaoModel[]> {
    return this.httpClient.get<RegiaoModel[]>(`${APIUrl}/regioes/buscar`);
  }

}
