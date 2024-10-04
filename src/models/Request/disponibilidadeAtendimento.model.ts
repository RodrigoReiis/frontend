export class DisponibilidadeAtendimento {
  constructor(
    public idMedico: string,
    public diaDaSemana: number,
    public inicio: string,
    public fim: string,
  ) {}
}
