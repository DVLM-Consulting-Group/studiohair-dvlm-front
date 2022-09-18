import { FuncionarioCreateComponent } from './views/components/funcionario/funcionario-create/funcionario-create.component';
import { FuncionarioReadComponent } from './views/components/funcionario/funcionario-read/funcionario-read.component';
import { HomeComponent } from './views/components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionarioUpdateComponent } from './views/components/funcionario/funcionario-update/funcionario-update.component';
import { FuncionarioDeleteComponent } from './views/components/funcionario/funcionario-delete/funcionario-delete.component';
import { AgendamentoReadComponent } from './views/components/agendamento/agendamento-read/agendamento-read.component';
import { ClienteReadComponent } from './views/components/cliente/cliente-read/cliente-read.component';
import { ClienteCreateComponent } from './views/components/cliente/cliente-create/cliente-create.component';
import { ClienteUpdateComponent } from './views/components/cliente/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './views/components/cliente/cliente-delete/cliente-delete.component';
import { AgendamentoCreateComponent } from './views/components/agendamento/agendamento-create/agendamento-create.component';
import { AgendamentoUpdateComponent } from './views/components/agendamento/agendamento-update/agendamento-update.component';
import { AgendamentoViewComponent } from './views/components/agendamento/agendamento-view/agendamento-view.component';
import { AgendamentoClosedComponent } from './views/components/agendamento/agendamento-closed/agendamento-closed.component';

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
    path: 'clientes',
    component: ClienteReadComponent
  },
  {
    path: 'clientes/create',
    component: ClienteCreateComponent
  },
  {
    path: 'clientes/update/:id',
    component: ClienteUpdateComponent
  },
  {
    path: 'clientes/delete/:id',
    component: ClienteDeleteComponent
  },
  {
    path: 'agendamentos',
    component: AgendamentoReadComponent
  },
  {
    path: 'agendamentos/create',
    component: AgendamentoCreateComponent
  },
  {
    path: 'agendamentos/update/:id',
    component: AgendamentoUpdateComponent
  },
  {
    path: 'agendamentos/view/:id',
    component: AgendamentoViewComponent
  },
  {
    path: 'agendamentos/closed',
    component: AgendamentoClosedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
