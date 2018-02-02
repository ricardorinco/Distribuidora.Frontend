import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';

import { AppRouting } from './app.routing';

import { BooleanToStringPipe } from './pipes/boolean-to-string.pipe';

import { AtendimentoService } from './services/atendimento.service';
import { DialogService } from './dialog.service';
import { EstadoService } from './services/estado.service';
import { FornecedorService } from './services/fornecedor.service';
import { FornecedorRegiaoService } from './services/fornecedor-regiao.service';
import { RegiaoService } from './services/regiao.service';

import { AppComponent } from './app.component';
import { FormRegiaoComponent } from './templates/regioes/form-regiao/form-regiao.component';
import { FornecedoresComponent } from './templates/fornecedores/fornecedores.component';
import { HeaderComponent } from './templates/header/header.component';
import { HomeComponent } from './templates/home/home.component';
import { ListRegiaoComponent } from './templates/regioes/list-regiao/list-regiao.component';
import { MenuComponent } from './templates/header/menu/menu.component';
import { RegioesComponent } from './templates/regioes/regioes.component';

@NgModule({
  declarations: [
    AppComponent,
    BooleanToStringPipe,
    FormRegiaoComponent,
    FornecedoresComponent,
    HeaderComponent,
    HomeComponent,
    ListRegiaoComponent,
    MenuComponent,
    RegioesComponent
  ],
  imports: [
    AppRouting,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ToastrModule.forRoot({
      tapToDismiss: true,
      closeButton: true,
      preventDuplicates: true,
      progressBar: true,
      progressAnimation: 'decreasing'
    })
  ],
  providers: [
    AtendimentoService,
    DialogService,
    EstadoService,
    FornecedorService,
    FornecedorRegiaoService,
    RegiaoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
