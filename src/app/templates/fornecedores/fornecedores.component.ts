import { Component, OnInit } from '@angular/core';

import { AtendimentoService } from './../../services/atendimento.service';
import { FornecedorService } from './../../services/fornecedor.service';
import { FornecedorRegiaoService } from './../../services/fornecedor-regiao.service';

import { AtendimentoModel } from './../../models/atendimento.model';
import { FornecedorModel } from './../../models/fornecedor.model';
import { FornecedorRegiaoModel } from './../../models/fornecedor-regiao.model';

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html'
})
export class FornecedoresComponent implements OnInit {

  atendimentos: AtendimentoModel[];
  fornecedor: FornecedorModel;
  fornecedores: FornecedorModel[];
  fornecedorRegiao: FornecedorRegiaoModel;

  constructor(
    private atendimentoService: AtendimentoService,
    private fornecedorService: FornecedorService,
    private fornecedorRegiaoService: FornecedorRegiaoService
  ) { }

  ngOnInit() {
    this.popularFornecedoresDropDownList();

    this.fornecedor = new FornecedorModel();
    this.fornecedorRegiao = new FornecedorRegiaoModel();
  }

  popularFornecedoresDropDownList() {
    this.fornecedorService.buscarTodos()
      .subscribe(
        fornecedores => this.fornecedores = fornecedores,
        error => console.log(error)
      );
  }

  onSubmit() {
    this.atendimentoService.buscarTodos(this.fornecedor.IdFornecedor)
      .subscribe(
        atendimentos => this.atendimentos = atendimentos,
        error => console.log(error)
      );
  }

  atribuirFornecedor(atendimento: AtendimentoModel) {
    const alterarAtendimento = this.atendimentos
      .filter(a =>
        a.Estado === atendimento.Estado
        && a.Regiao === atendimento.Regiao
        && a.Ativo === atendimento.Ativo
        && a.IdFornecedor === a.IdFornecedor
      );
    if (alterarAtendimento[0].IdFornecedor === 0) {
      alterarAtendimento[0].IdFornecedor = this.fornecedor.IdFornecedor;
    } else {
      alterarAtendimento[0].IdFornecedor = 0;
    }
  }

  gravarFornecedores() {
    if (this.atendimentos.length > 0) {
      this.atendimentos.forEach(a => {
        if (a.IdFornecedorRegiao === 0 && a.IdFornecedor !== 0) {
          this.fornecedorRegiao.IdFornecedor = a.IdFornecedor;
          this.fornecedorRegiao.IdRegiao = a.IdRegiao;

          this.fornecedorRegiaoService.criar(this.fornecedorRegiao).subscribe();
        } else if (a.IdFornecedorRegiao !== 0 && a.IdFornecedor === 0) {
          this.fornecedorRegiaoService.deletar(a.IdFornecedorRegiao).subscribe();
        }
      });

      setTimeout(() => { location.reload(); }, 500);
    }
  }

  getFormGroupClass(isValid: boolean, isPristine: boolean) {
    return {
      'form-control': true,
      'is-invalid': (!isValid && !isPristine),
      'is-valid': (isValid && !isPristine)
    };
  }

  setTableBackgroundCSS(ativo: boolean) {
    if (ativo === true) {
      return { 'background-color': 'white' };
    } else {
      return { 'background-color': '#FFDFDF' };
    }
  }

}
