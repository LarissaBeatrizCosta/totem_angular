import { Injectable, inject } from '@angular/core';
import { RatingStore } from '../store/rating-store';
import { CpfStore } from '../store/cpf-store';
import { CommentStore } from '../store/comment-store';
import { RateModel } from '../models/rate';
import { StarsStore } from '../store/rating-stars-store';

@Injectable({ providedIn: 'root' })
export class RateService {
  rates: RateModel[] = [];
  private ratingStore = inject(RatingStore);
  private starsStore = inject(StarsStore);
  private cpfStore = inject(CpfStore);
  private commentStore = inject(CommentStore);

  saveRate(): RateModel {
    const finalRating = new RateModel({
      recommendation: this.ratingStore.recommendationRating() ?? 0,
      environment: this.starsStore.starEnvironmentRating() ?? 0,
      collaborator: this.starsStore.starCollaboratorRating() ?? 0,
      time: this.starsStore.starTimeRating() ?? 0,
      comment: this.commentStore.comment(),
      cpf: this.cpfStore.cpfUser(),
    });

    this.rates.push(finalRating);
    console.log('aqui ------------------')
    console.log(finalRating.collaborator);
    console.log(finalRating.comment);
    console.log(finalRating.cpf);
    console.log(finalRating.environment);
    console.log(finalRating.recommendation);
    console.log(finalRating.time);

    return finalRating;
  }
}
