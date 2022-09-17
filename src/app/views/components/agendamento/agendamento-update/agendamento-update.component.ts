import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Agendamento } from 'src/app/models/agendamento';
import { Cliente } from 'src/app/models/cliente';
import { Funcionario } from 'src/app/models/funcionario';
import { AgendamentoService } from 'src/app/services/agendamento.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-agendamento-update',
  templateUrl: './agendamento-update.component.html',
  styleUrls: ['./agendamento-update.component.css']
})
export class AgendamentoUpdateComponent implements OnInit {


  ag: Agendamento = {
    funcionario: '',
    cliente: '',
    observacoes: '',
    servico: '',
    status: '',
    dataAgendamento: undefined,
    dataExServico: '',
    valor: undefined
  }

funcionarios: Funcionario[] = []
clientes: Cliente[] = []

constructor(
  private FuncionarioService: FuncionarioService,
  private ClienteService: ClienteService,
  private service: AgendamentoService,
  private router: Router,
  private route: ActivatedRoute
) { }

ngOnInit(): void {
  this.ag.id = this.route.snapshot.paramMap.get('id')
  this.findById();
  this.listarFuncionario();
  this.listarClientes();
}

findById():void {
  this.service.findById(this.ag.id).subscribe(resposta => {
    this.ag = resposta;
    this.converteDados();
  })
}

update(): void {
  this.service.update(this.ag).subscribe(resposta => {
    this.service.message("Agendamento Atualizado com sucesso!");
    this.router.navigate(['agendamentos'])
  })
}

cancel(): void {
  this.router.navigate(['agendamentos'])
}

listarFuncionario(): void {
  this.FuncionarioService.findAll().subscribe(resposta => {
    this.funcionarios = resposta;
  })
}

listarClientes(): void {
  this.ClienteService.findAll().subscribe(resposta => {
    this.clientes = resposta;
  })
}

converteDados():void {
  if(this.ag.status == 'ABERTO'){
    this.ag.status = 0;
  } else if (this.ag.status == 'ENCERRADO') {
    this.ag.status = 1;
  } else {
    this.ag.status == 2;
  } 

  if(this.ag.servico == 'CORTE'){
    this.ag.servico = 0;
  } else if (this.ag.servico == 'PENTEADO'){
    this.ag.servico = 1;
  } else if (this.ag.servico == 'TINGIMENTO'){
    this.ag.servico = 2;
  } else if (this.ag.servico == 'MANICURE'){
    this.ag.servico = 3;
  } else if (this.ag.servico == 'PEDICURE'){
    this.ag.servico = 4;
  } else {
    this.ag.servico = 5;
  }
} 

}
