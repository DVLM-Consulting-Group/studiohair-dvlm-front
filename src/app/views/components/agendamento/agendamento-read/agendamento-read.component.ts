import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Agendamento } from 'src/app/models/agendamento';
import { AgendamentoService } from 'src/app/services/agendamento.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-agendamento-read',
  templateUrl: './agendamento-read.component.html',
  styleUrls: ['./agendamento-read.component.css']
})
export class AgendamentoReadComponent implements AfterViewInit {

  lista: Agendamento[] = [];

  displayedColumns: string[] = ['abertura', 'execucao','funcionario','servico', 'cliente', 'status','action'];
  dataSource = new MatTableDataSource<Agendamento>(this.lista);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private service : AgendamentoService,
    private router : Router,
    private funcionarioService: FuncionarioService,
    private clienteService: ClienteService,
    private titleService: Title){
      this.titleService.setTitle('StudioHair - Agendamentos')
    }

  ngAfterViewInit() {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      resposta.forEach(x => {
        if(x.status != "CANCELADO") {
          this.lista.push(x)
        }
        var date = new Date(x.dataExServico)
        x.dataExServico = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}` 
      })
      this.listarFuncionario();
      this.listarCliente();
      this.dataSource = new MatTableDataSource<Agendamento>(this.lista);
      this.dataSource.paginator = this.paginator;
    })
  }

  navigateToCreate():void{
    this.router.navigate(['agendamentos/create'])
  }

  listarFuncionario():void {
    this.lista.forEach(x => {
      this.funcionarioService.findById(x.funcionario).subscribe(resposta =>{
        x.funcionario = resposta.nome
      })
    })
  }

  
  listarCliente():void {
    this.lista.forEach(x => {
      this.clienteService.findById(x.cliente).subscribe(resposta =>{
        x.cliente = resposta.nome
      })
    })
  }

  status(x : any) {
    if(x == 'ABERTO') {
      return 'aberto'
    } else if (x == 'ENCERRADO') {
      return 'encerrado'
    } else {
      return 'cancelado'
    }
  }

}
