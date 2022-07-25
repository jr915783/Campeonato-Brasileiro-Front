import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GridTimesComponent } from './grid-times/grid-times.component';
import { TabelaTimesComponent } from './tabela-times/tabela-times.component';

const routes: Routes = [
  {path:'tabela', component: TabelaTimesComponent},
  {path:'grid', component: GridTimesComponent},
  {path:'', redirectTo:'tabela', pathMatch:'full'},
  {path:'**', redirectTo:'tabela', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
