import { Funcionario } from './../../../../models/funcionario';
import { FuncionarioService } from './../../../../services/funcionario.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

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

  nome = new FormControl('', [Validators.minLength(5)])
  cpf = new FormControl('', [Validators.minLength(11)])
  telefone = new FormControl('', [Validators.minLength(9)])
  email = new FormControl('', [Validators.minLength(5)])

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

  errorValidNome() {
    if(this.nome.invalid) {
      return 'O Nome deve ter no mínimo 5 caracteres!'
    }
    return false;
  }

  errorValidCpf() {
    if(this.cpf.invalid) {
      return 'O CPF deve ter 11 caracteres!'
    }
    return false;
  }

  errorValidTelefone() {
    if(this.telefone.invalid) {
      return 'O Telefone deve ter no mínimo 9 caracteres!'
    }
    return false;
  }

  errorValidEmail() {
    if(this.email.invalid) {
      return 'O E-mail deve ter no mínimo 5 caracteres!'
    }
    return false;
  }

}
