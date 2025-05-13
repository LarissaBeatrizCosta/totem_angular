import { Component, HostListener, inject } from '@angular/core';
import { NumeredListComponent } from '../../components/numered-list/numered-list.component';
import { ButtonSendComponent } from '../../components/button-send/button-send.component';
import { Router } from '@angular/router';
import { AlertComponent } from '../../components/alert/alert.component';
import { AppStore } from '../../store/app-store';

@Component({
  selector: 'app-index',
  imports: [NumeredListComponent, ButtonSendComponent, AlertComponent],
  standalone: true,
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexView {
  private router = inject(Router);
  store = inject(AppStore);
  size = window.innerWidth > 850;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.size = window.innerWidth > 850;
  }

  navigateToHome() {
    const rating = this.store.recommendationRating();
    if (rating !== null) {
      this.router.navigate(['Stars']);
    } else {
      this.store.showAlert = true;
      setTimeout(() => {
        this.store.showAlert = false;
      }, 3000);
    }
  }
}
