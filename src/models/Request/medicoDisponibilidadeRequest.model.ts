export class MedicoDisponibilidadeRequest {
  constructor(
    public idMedico: string,
    public diaDaSemana: number,
    public inicio: string,
    public fim: string,
  ) {}
}
