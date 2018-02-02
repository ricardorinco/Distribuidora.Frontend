import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';

import { APIUrl } from './../app.api';

import { FornecedorModel } from './../models/fornecedor.model';

@Injectable()
export class FornecedorService {

  constructor(private httpClient: HttpClient) { }

  buscarTodos(): Observable<FornecedorModel[]> {
    return this.httpClient.get<FornecedorModel[]>(`${APIUrl}/fornecedores/buscar`);
  }

}
