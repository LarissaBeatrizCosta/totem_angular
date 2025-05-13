import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StarsStore {
  starEnvironmentRating = signal<number | null>(null);
  starCollaboratorRating = signal<number | null>(null);
  starTimeRating = signal<number | null>(null);


  setstarstarTimeRating(newRating: number | null) {
    this.starTimeRating.set(newRating);
  }
  setstarCollaboratorRating(newRating: number | null) {
    this.starCollaboratorRating.set(newRating);
  }
  setstarEnvironmentRating(newRating: number | null) {
    this.starEnvironmentRating.set(newRating);
  }
}
