import { EstadoModel } from './estado.model';
import { ResultadoValidacaoModel } from './resultado-validacao.model';

export class RegiaoModel {
  IdRegiao: number;
  IdEstado: number;
  Estado: EstadoModel;
  Descricao: string;
  Ativo: boolean;
  ResultadoValidacao: ResultadoValidacaoModel;
}
