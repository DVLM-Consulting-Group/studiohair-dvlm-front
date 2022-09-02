import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionario-create',
  templateUrl: './funcionario-create.component.html',
  styleUrls: ['./funcionario-create.component.css']
})
export class FuncionarioCreateComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.router.navigate(['funcionarios'])
  }

}
