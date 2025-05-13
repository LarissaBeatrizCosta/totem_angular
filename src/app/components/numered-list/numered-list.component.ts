import { Component, inject } from '@angular/core';
import { NumeredBoxComponent } from "../numered-box/numered-box.component";
import { CommonModule } from '@angular/common';
import { AppStore } from '../../store/app-store';

@Component({
  selector: 'app-numered-list',
  imports: [NumeredBoxComponent, CommonModule],
  standalone: true,
  templateUrl: './numered-list.component.html',
  styleUrl: './numered-list.component.css',
})
export class NumeredListComponent {
  numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  store = inject(AppStore);

  onClick(number: number) {
    this.store.setRecommendationRating(number);
  }
}
