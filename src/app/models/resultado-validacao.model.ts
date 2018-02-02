import { ErrosModel } from './erros.model';

export class ResultadoValidacaoModel {
  Message: string;
  IsValid: boolean;
  Erros: ErrosModel[];
}
