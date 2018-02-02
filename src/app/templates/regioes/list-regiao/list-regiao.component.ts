import { Component, OnInit } from '@angular/core';

import { DialogService } from './../../../dialog.service';
import { RegiaoService } from './../../../services/regiao.service';

import { RegiaoModel } from './../../../models/regiao.model';

@Component({
  selector: 'app-list-regiao',
  templateUrl: './list-regiao.component.html'
})
export class ListRegiaoComponent implements OnInit {

  regioes: RegiaoModel[];

  constructor(
    private dialogService: DialogService,
    private regiaoService: RegiaoService
  ) { }

  ngOnInit() {
    this.regiaoService.buscarTodos()
      .subscribe(
        regiao => this.regioes = regiao,
        error => console.log(error)
      );
  }

  modificarStatus(idRegiao: number) {
    this.dialogService.confirm('Deseja alterar o status da região selecionada?')
      .then((canDelete: boolean) => {
        if (canDelete) {
          this.regiaoService.buscarPorId(idRegiao)
            .subscribe(
              result => {
                let regiaoAlterar = result;
                regiaoAlterar.Ativo = regiaoAlterar.Ativo ? false : true;
                this.regiaoService.atualizar(idRegiao, regiaoAlterar)
                  .subscribe(
                    regiao => location.reload(),
                    error => console.log(error)
                  );
              },
            error => console.log(error)
          );
        }
      });
  }

}
