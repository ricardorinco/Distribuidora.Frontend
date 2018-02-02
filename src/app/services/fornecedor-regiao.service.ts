import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';

import { APIUrl } from './../app.api';

import { FornecedorRegiaoModel } from './../models/fornecedor-regiao.model';

@Injectable()
export class FornecedorRegiaoService {

  private headers: Headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private httpClient: HttpClient) { }

  criar(fornecedorRegiaoModel: FornecedorRegiaoModel): Observable<FornecedorRegiaoModel> {
    return this.httpClient.post<FornecedorRegiaoModel>(`${APIUrl}/fornecedores-regioes/criar`, fornecedorRegiaoModel);
  }

  deletar(idFornecedorRegiao: number): Observable<any> {
    return this.httpClient.delete(`${APIUrl}/fornecedores-regioes/deletar/${idFornecedorRegiao}`);
  }

}
