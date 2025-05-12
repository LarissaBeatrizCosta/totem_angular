import { inject, Injectable } from '@angular/core';
import { RatingStore } from '../store/rating-store';
import { StarsStore } from '../store/rating-stars-store';
import { CpfStore } from '../store/cpf-store';
import { CommentStore } from '../store/comment-store';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class resetTimer {
  private recommendation = inject(RatingStore);
  private stars = inject(StarsStore);
  private cpf = inject(CpfStore);
  private comment = inject(CommentStore);
  private router = inject(Router);

  reset() {
    this.recommendation.setRecommendationRating(null);
    this.stars.setstarstarTimeRating(0);
    this.stars.setstarCollaboratorRating(0);
    this.stars.setstarEnvironmentRating(0);
    this.cpf.setCpf('');
    this.comment.setComment('');
    this.router.navigate(['']);
  }
}
