import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';

import { APIUrl } from './../app.api';

import { EstadoModel } from './../models/estado.model';

@Injectable()
export class EstadoService {

  constructor(private httpClient: HttpClient) { }

  buscarTodos(): Observable<EstadoModel[]> {
    return this.httpClient.get<EstadoModel[]>(`${APIUrl}/estados/buscar`);
  }

}
