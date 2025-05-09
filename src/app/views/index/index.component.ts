import { Component, inject } from '@angular/core';
import { NumeredListComponent } from '../../components/numered-list/numered-list.component';
import { ButtonSendComponent } from '../../components/button-send/button-send.component';
import { Router } from '@angular/router';
import { RatingStore } from '../../store/rating-store.component';

@Component({
  selector: 'app-index',
  imports: [NumeredListComponent, ButtonSendComponent],
  standalone: true,
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexView {
  private router = inject(Router);
  private ratingStore = inject(RatingStore);
  navigateToHome() {
    const rating = this.ratingStore.recommendationRating(); 
    if (rating !== null) {
      this.router.navigate(['Home']);
    } else {
      console.log('Nota não selecionada');
    }
  }
}
