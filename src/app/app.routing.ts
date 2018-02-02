import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FornecedoresComponent } from './templates/fornecedores/fornecedores.component';
import { HomeComponent } from './templates/home/home.component';
import { RegioesComponent } from './templates/regioes/regioes.component';

const appRoutings: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'regioes', component: RegioesComponent },
  { path: 'regioes/:id', component: RegioesComponent },
  { path: 'fornecedores', component: FornecedoresComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(appRoutings)]
})
export class AppRouting { }
