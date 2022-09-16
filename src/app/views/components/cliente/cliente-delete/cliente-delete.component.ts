import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.css']
})
export class ClienteDeleteComponent implements OnInit {

  id_cli = ''

  cliente: Cliente = {
    id: '',
    nome: '',
    cpf: '',
    telefone: '',
    email: ''
  }

  constructor(private router : Router,
    private service : ClienteService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id_cli = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  findById(): void {
    this.service.findById(this.id_cli).subscribe((resposta) => {
      this.cliente = resposta;
    }) 
  }

  delete():void {
    this.service.delete(this.id_cli).subscribe(resposta => {
      this.router.navigate(['clientes'])
      this.service.message('Funcionário Deletado com Sucesso!')
    }, err => {
      if(err.error.erro.match('possui agendamento aberto')) {
        this.service.message(err.error.erro);
      }
    })
  }
  

  cancel(): void {
    this.router.navigate(['clientes'])
  }

}