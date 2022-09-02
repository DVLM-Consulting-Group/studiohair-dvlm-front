import { Funcionario } from './../models/funcionario';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  baseUrl: String = environment.baseUrl;

  constructor(
    private http : HttpClient,
    private snack: MatSnackBar) { }

  findAll():Observable<Funcionario[]>{
    const url = this.baseUrl + "/funcionarios";
    return this.http.get<Funcionario[]>(url);
  }

  create(funcionario: Funcionario):Observable<Funcionario> {
      const url = this.baseUrl + "/funcionarios";
      return this.http.post<Funcionario>(url, funcionario);
  }

  message(msg: String): void {
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })
  }
}
