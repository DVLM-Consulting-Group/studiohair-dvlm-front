import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-funcionario-update',
  templateUrl: './funcionario-update.component.html',
  styleUrls: ['./funcionario-update.component.css']
})
export class FuncionarioUpdateComponent implements OnInit {

  id_func = ''

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
    private service : FuncionarioService,
    private route: ActivatedRoute,
    private titleService: Title) {
      this.titleService.setTitle('StudioHair - Atualizar Profissional')
     }

  ngOnInit(): void {
    this.id_func = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  update(): void {
    this.service.update(this.funcionario).subscribe((resposta) => {
    this.router.navigate(['funcionarios'])  
    this.service.message('Funcionário Atualizado com sucesso!')
    })
  }

  findById(): void {
    this.service.findById(this.id_func).subscribe((resposta) => {
      this.funcionario = resposta;
    }, err => {
      console.log(err)
      if (err.error.erro.match('CPF já cadastrado na base de dados!')) {
        this.service.message(err.error.erro)
      } else if (err.error.erro[0].message === "número do registro de contribuinte individual brasileiro (CPF) inválido") {
        this.service.message("CPF inválido!")
        console.log(err)
      } else {
        console.log(err)
      }
    })
    
  }
  

  cancel(): void {
    this.router.navigate(['funcionarios'])
  }

  errorValidNome() {
    if(this.nome.invalid) {
      return 'O Nome deve ter no mínimo 5 caracteres!'
    }
    return false;
  }

  errorValidCpf() {
    if(this.cpf.invalid) {
      return 'O CPF deve ser válido e ter 11 caracteres!'
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
