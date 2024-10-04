export class Medicos {
  constructor(
    public nome: string,
    public cpf: string,
    public crm: string,
    public tempoDeConsulta: number,
    public tipo: string,
    public email: string,
    public periodoAtendimento: Array<any>,
    public agendaDiaria: Array<any>,
    public id: string
  ){}
}
