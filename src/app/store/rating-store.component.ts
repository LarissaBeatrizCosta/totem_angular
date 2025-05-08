import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RatingStore {
  recommendationRating = signal<number | null>(null);

  setRecommendationRating(newRating: number) {
    this.recommendationRating.set(newRating);
  }
}
