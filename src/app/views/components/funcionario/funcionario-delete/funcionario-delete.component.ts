import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-funcionario-delete',
  templateUrl: './funcionario-delete.component.html',
  styleUrls: ['./funcionario-delete.component.css']
})
export class FuncionarioDeleteComponent implements OnInit {

  id_func = ''

  funcionario: Funcionario = {
    id: '',
    nome: '',
    cpf: '',
    telefone: '',
    email: ''
  }

  constructor(private router : Router,
    private service : FuncionarioService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id_func = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  findById(): void {
    this.service.findById(this.id_func).subscribe((resposta) => {
      this.funcionario = resposta;
    }) 
  }

  delete():void {
    this.service.delete(this.id_func).subscribe(resposta => {
      this.router.navigate(['funcionarios'])
      this.service.message('Funcionário Deletado com Sucesso!')
    }, err => {
      if(err.error.erro.match('possui agendamento aberto')) {
        this.service.message(err.error.erro);
      }
    })
  }
  

  cancel(): void {
    this.router.navigate(['funcionarios'])
  }

}