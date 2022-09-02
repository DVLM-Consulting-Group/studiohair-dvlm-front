import { Funcionario } from './../../../../models/funcionario';
import { FuncionarioService } from './../../../../services/funcionario.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionario-create',
  templateUrl: './funcionario-create.component.html',
  styleUrls: ['./funcionario-create.component.css']
})
export class FuncionarioCreateComponent implements OnInit {

  funcionario: Funcionario = {
    id: '',
    nome: '',
    cpf: '',
    telefone: '',
    email: ''
  }

  constructor(private router : Router,
    private service : FuncionarioService) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.router.navigate(['funcionarios'])
  }

  create(): void {
    this.service.create(this.funcionario).subscribe((resposta) => {
      this.router.navigate(['funcionarios'])
      this.service.message('Funcionario criado com sucesso!')
    }, err => {
      console.log(err)
      if (err.error.error.match('CPF já cadastrado na base de dados!')) {
        this.service.message(err.error.error)
      } else if (err.error.errors[0].message === "número do registro de contribuinte individual brasileiro (CPF) inválido") {
        this.service.message("CPF inválido!")
        console.log(err)
      } else {
        console.log(err)
      }
    })
    
  }

}
