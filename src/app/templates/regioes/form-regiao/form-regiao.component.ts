import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { EstadoService } from './../../../services/estado.service';
import { RegiaoService } from './../../../services/regiao.service';
import { ToastrService } from 'ngx-toastr';

import { EstadoModel } from './../../../models/estado.model';
import { RegiaoModel } from './../../../models/regiao.model';

@Component({
  selector: 'app-form-regiao',
  templateUrl: './form-regiao.component.html'
})
export class FormRegiaoComponent implements OnInit {

  private novaRegiao: boolean;

  regiaoId: number;
  estados: EstadoModel[];
  regiao: RegiaoModel;

  constructor(
    private activatedRoute: ActivatedRoute,
    private estadoService: EstadoService,
    private regiaoService: RegiaoService,
    private router: Router,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.popularEstadosDropDownList();

    this.activatedRoute.params.subscribe(params => { this.regiaoId = params['id']; this.popularFormGroup(); });

    if (this.regiaoId === undefined) {
      this.novaRegiao = true;
    }

    this.regiao = new RegiaoModel();
  }

  popularEstadosDropDownList() {
    this.estadoService.buscarTodos()
      .subscribe(
        estados => this.estados = estados,
        error => console.log(error)
      );
  }

  popularFormGroup() {
    if (this.regiaoId !== undefined) {
      this.novaRegiao = false;
      this.regiaoService.buscarPorId(this.regiaoId)
        .subscribe(
          regiao => this.regiao = regiao,
          error => console.log(error)
        );
    }
  }

  onSubmit() {
    if (this.novaRegiao) {
      this.regiao.Ativo = true;
      this.regiaoService.criar(this.regiao)
        .subscribe(
          regiao => {
            if (regiao.ResultadoValidacao.IsValid) {
              location.reload();
            } else {
              regiao.ResultadoValidacao.Erros.forEach((error) => this.toastrService.error(error.Message, 'Ops...'));
            }
          },
          error => console.log(error)
        );
    } else {
      this.regiaoService.atualizar(this.regiaoId, this.regiao)
        .subscribe(
          regiao => this.router.navigate(['regioes']),
          error => console.log(error)
        );
    }
  }

  getFormGroupClass(isValid: boolean, isPristine: boolean) {
    return {
      'form-control': true,
      'is-invalid': (!isValid && !isPristine),
      'is-valid': (isValid && !isPristine)
    };
  }

}
