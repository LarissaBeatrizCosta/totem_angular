import { Injectable, inject } from '@angular/core';
import { RateModel } from '../models/rate';
import { AppStore } from '../store/app-store';

@Injectable({ providedIn: 'root' })
export class RateService {
  rates: RateModel[] = [];
  private store = inject(AppStore);
  saveRate(): RateModel {
    const finalRating = new RateModel({
      recommendation: this.store.recommendationRating() ?? 0,
      environment: this.store.starEnvironmentRating() ?? 0,
      collaborator: this.store.starCollaboratorRating() ?? 0,
      time: this.store.starTimeRating() ?? 0,
      comment: this.store.comment(),
      cpf: this.store.cpfUser(),
    });

    this.rates.push(finalRating);
    console.log('aqui ------------------');
    console.log(finalRating.collaborator);
    console.log(finalRating.comment);
    console.log(finalRating.cpf);
    console.log(finalRating.environment);
    console.log(finalRating.recommendation);
    console.log(finalRating.time);

    return finalRating;
  }
}
