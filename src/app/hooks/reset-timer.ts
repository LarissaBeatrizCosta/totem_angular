import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppStore } from '../store/app-store';

@Injectable({ providedIn: 'root' })
export class resetTimer {
  private store = inject(AppStore);
  private router = inject(Router);

  reset() {
    this.store.setRecommendationRating(null);
    this.store.setstarstarTimeRating(null);
    this.store.setstarCollaboratorRating(null);
    this.store.setstarEnvironmentRating(null);
    this.store.setCpf('');
    this.store.setComment('');
    this.router.navigate(['']);
  }
}
