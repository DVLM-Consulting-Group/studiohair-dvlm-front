import { FuncionarioService } from './../../../../services/funcionario.service';
import { Funcionario } from './../../../../models/funcionario';
import { AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-funcionario-read',
  templateUrl: './funcionario-read.component.html',
  styleUrls: ['./funcionario-read.component.css']
})
export class FuncionarioReadComponent implements AfterViewInit {

  funcionarios: Funcionario[] = [];

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'telefone', 'email' , 'action'];
  dataSource = new MatTableDataSource<Funcionario>(this.funcionarios);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private service : FuncionarioService,
    private router : Router,
    private titleService: Title){
      this.titleService.setTitle('StudioHair - Profissionais')
    }

  ngAfterViewInit() {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      this.funcionarios = resposta;
      this.dataSource = new MatTableDataSource<Funcionario>(this.funcionarios);
      this.dataSource.paginator = this.paginator;
    })
  }

  navigateToCreate():void{
    this.router.navigate(['funcionarios/create'])
  }


}


