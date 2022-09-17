import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Agendamento } from '../models/agendamento';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  baseUrl: String = environment.baseUrl;

  constructor(
    private http : HttpClient,
    private snack: MatSnackBar) { }

  findAll():Observable<Agendamento[]>{
    const url = this.baseUrl + "/agendamentos";
    return this.http.get<Agendamento[]>(url);
  }

  findById(id : any ):Observable<Agendamento> {
    const url = `${this.baseUrl}/agendamentos/${id}`;
    return this.http.get<Agendamento>(url);
  }

  create(agendamento: Agendamento):Observable<Agendamento> {
      const url = this.baseUrl + "/agendamentos";
      return this.http.post<Agendamento>(url, agendamento);
  }

  update(agendamento: Agendamento):Observable<Agendamento> {
    const url = `${this.baseUrl}/agendamentos/`;
    return this.http.put<Agendamento>(url, agendamento);
  }

  delete(id : any):Observable <void> {
    const url = `${this.baseUrl}/agendamentos/${id}`;
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
