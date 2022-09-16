import { FuncionarioCreateComponent } from './views/components/funcionario/funcionario-create/funcionario-create.component';
import { FuncionarioReadComponent } from './views/components/funcionario/funcionario-read/funcionario-read.component';
import { HomeComponent } from './views/components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionarioUpdateComponent } from './views/components/funcionario/funcionario-update/funcionario-update.component';
import { FuncionarioDeleteComponent } from './views/components/funcionario/funcionario-delete/funcionario-delete.component';
import { AgendamentoReadComponent } from './views/components/agendamento/agendamento-read/agendamento-read.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'funcionarios',
    component: FuncionarioReadComponent
  },
  {
    path: 'funcionarios/create',
    component: FuncionarioCreateComponent
  },
  {
    path: 'funcionarios/update/:id',
    component: FuncionarioUpdateComponent
  },
  {
    path: 'funcionarios/delete/:id',
    component: FuncionarioDeleteComponent
  },
  {
    path: 'agendamentos',
    component: AgendamentoReadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
