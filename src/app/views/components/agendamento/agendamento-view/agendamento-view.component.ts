import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Agendamento } from 'src/app/models/agendamento';
import { AgendamentoService } from 'src/app/services/agendamento.service';

@Component({
  selector: 'app-agendamento-view',
  templateUrl: './agendamento-view.component.html',
  styleUrls: ['./agendamento-view.component.css']
})
export class AgendamentoViewComponent implements OnInit {

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
  
  constructor(private route: ActivatedRoute,
    private service: AgendamentoService,
    private router: Router) { }

  ngOnInit(): void {
    this.ag.id = this.route.snapshot.paramMap.get("id");
    this.findById();
  }

  findById():void {
    this.service.findById(this.ag.id).subscribe(resposta => {
      this.ag = resposta;
      
    })
  }

  cancel(): void {
    this.router.navigate(['agendamentos'])
  }
}
