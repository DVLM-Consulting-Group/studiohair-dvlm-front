import { DecimalPipe } from "@angular/common";

export interface Agendamento {
    id?: any;
    dataAgendamento: any;
    dataExServico: Date;
    servico: any;
    observacoes: String;
    status: any;
    funcionario: any;
    cliente: any;
    valor: any;
}