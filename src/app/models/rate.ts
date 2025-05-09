export class RateModel {
  recommendation: number | null;
  environment: number | null;
  collaborator: number | null;
  time: number | null;
  comment: string;
  cpf: string;

  constructor(data: {
    recommendation?: number;
    environment?: number;
    collaborator?: number;
    time?: number;
    comment?: string;
    cpf?: string;
  }) {
    this.recommendation = data.recommendation ?? 0;
    this.environment = data.environment ?? 0;
    this.collaborator = data.collaborator ?? 0;
    this.time = data.time ?? 0;
    this.comment = data.comment ?? '';
    this.cpf = data.cpf ?? '';
  }
}
