import { Component, HostListener, inject } from '@angular/core';
import { NumeredListComponent } from '../../components/numered-list/numered-list.component';
import { ButtonSendComponent } from '../../components/button-send/button-send.component';
import { Router } from '@angular/router';
import { RatingStore } from '../../store/rating-store';
import { AlertStore } from '../../store/alert-store';
import { AlertComponent } from '../../components/alert/alert.component';

@Component({
  selector: 'app-index',
  imports: [NumeredListComponent, ButtonSendComponent, AlertComponent],
  standalone: true,
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexView {
  private router = inject(Router);
  private ratingStore = inject(RatingStore);
  showAlert = inject(AlertStore);
  size = window.innerWidth > 850 


  @HostListener('window:resize', ['$event'])
  onResize() {
    this.size = window.innerWidth > 850 ;
  }



  navigateToHome() {
    const rating = this.ratingStore.recommendationRating();
    if (rating !== null) {
      this.router.navigate(['Stars']);
    } else {
      this.showAlert.showAlert = true;
      setTimeout(() => {
        this.showAlert.showAlert = false;
      }, 3000);
    }
  }
}
