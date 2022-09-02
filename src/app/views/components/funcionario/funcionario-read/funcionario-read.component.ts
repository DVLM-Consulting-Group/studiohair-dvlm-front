import { FuncionarioService } from './../../../../services/funcionario.service';
import { Funcionario } from './../../../../models/funcionario';
import { AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-funcionario-read',
  templateUrl: './funcionario-read.component.html',
  styleUrls: ['./funcionario-read.component.css']
})
export class FuncionarioReadComponent implements AfterViewInit {

  funcionarios: Funcionario[] = [];

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'telefone', 'email'];
  dataSource = new MatTableDataSource<Funcionario>(this.funcionarios);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service : FuncionarioService){}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      this.funcionarios = resposta;
      console.log(this.funcionarios)
    })
  }
}

