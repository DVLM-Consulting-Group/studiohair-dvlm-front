import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agendamento } from 'src/app/models/agendamento';
import { Cliente } from 'src/app/models/cliente';
import { Funcionario } from 'src/app/models/funcionario';
import { AgendamentoService } from 'src/app/services/agendamento.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-agendamento-create',
  templateUrl: './agendamento-create.component.html',
  styleUrls: ['./agendamento-create.component.css']
})
export class AgendamentoCreateComponent implements OnInit {


    ag: Agendamento = {
      funcionario: '',
      cliente: '',
      observacoes: '',
      servico: '',
      status: '',
      dataAgendamento: '',
      dataExServico: new Date(),
      valor: ''
    }

  funcionarios: Funcionario[] = []
  clientes: Cliente[] = []

  constructor(
    private FuncionarioService: FuncionarioService,
    private ClienteService: ClienteService,
    private service: AgendamentoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listarFuncionario();
    this.listarClientes();
  }

  create(): void {
    this.formataData();
    this.service.create(this.ag).subscribe(resposta => {
      this.service.message("Agendamento Criado com sucesso!");
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

  formataData(): void {
    let data = new Date(this.ag.dataExServico)
    this.ag.dataExServico = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
  }

}
