import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';

import { APIUrl } from './../app.api';

import { AtendimentoModel } from './../models/atendimento.model';

@Injectable()
export class AtendimentoService {

  constructor(private httpClient: HttpClient) { }

  buscarTodos(idFornecedor: number): Observable<AtendimentoModel[]> {
    return this.httpClient.get<AtendimentoModel[]>(`${APIUrl}/atendimentos/buscar-por-fornecedor/${idFornecedor}`);
  }

}
