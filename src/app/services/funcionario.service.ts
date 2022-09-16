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

  findById(id : any ):Observable<Funcionario> {
    const url = `${this.baseUrl}/funcionarios/${id}`;
    return this.http.get<Funcionario>(url);
  }

  create(funcionario: Funcionario):Observable<Funcionario> {
      const url = this.baseUrl + "/funcionarios";
      return this.http.post<Funcionario>(url, funcionario);
  }

  update(funcionario: Funcionario):Observable<Funcionario> {
    const url = `${this.baseUrl}/funcionarios/${funcionario.id}`;
    return this.http.put<Funcionario>(url, funcionario);
  }

  delete(id : any):Observable <void> {
    const url = `${this.baseUrl}/funcionarios/${id}`;
    return this.http.delete<void>(url);

  }

  message(msg: String): void {
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })
  }
}
