export class PacienteRequest {
  constructor(
    public nome?: string,
    public email?: string,
    public cpf?: string,
    public senha?: string,
  ) {}
}
