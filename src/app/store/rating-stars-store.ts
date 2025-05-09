import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StarsStore {
  starEnvironmentRating = signal<number | null>(null);
  starCollaboratorRating = signal<number | null>(null);
  starTimeRating = signal<number | null>(null);


  setstarstarTimeRating(newRating: number) {
    this.starTimeRating.set(newRating);
  }
  setstarCollaboratorRating(newRating: number) {
    this.starCollaboratorRating.set(newRating);
  }
  setstarEnvironmentRating(newRating: number) {
    this.starEnvironmentRating.set(newRating);
  }
}
