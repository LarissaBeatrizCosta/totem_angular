import { Component, inject } from '@angular/core';
import { RatingStore } from '../../store/rating-store/rating-store.component';
import { NumeredBoxComponent } from "../numered-box/numered-box.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-numered-list',
  imports: [NumeredBoxComponent, CommonModule],
  standalone: true,
  templateUrl: './numered-list.component.html',
  styleUrl: './numered-list.component.css',
})
export class NumeredListComponent {
  numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  ratingStore = inject(RatingStore);

  onClick(number: number) {
    this.ratingStore.setRecommendationRating(number);
  }
}
