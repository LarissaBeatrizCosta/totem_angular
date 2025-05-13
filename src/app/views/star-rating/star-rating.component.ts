import { Component, HostListener, inject } from '@angular/core';
import { StarRateComponent } from '../../components/star-rate/star-rate.component';
import { ButtonSendComponent } from '../../components/button-send/button-send.component';
import { Router } from '@angular/router';
import { AlertComponent } from '../../components/alert/alert.component';
import { AppStore } from '../../store/app-store';

@Component({
  selector: 'app-star-rating',
  imports: [StarRateComponent, ButtonSendComponent, AlertComponent],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css',
})
export class StarRatingView {
  private router = inject(Router);
  store = inject(AppStore);
  showLogo: boolean = false;
  size = window.innerWidth > 850;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.size = window.innerWidth > 850;
  }

  setEnvironment(value: number) {
    this.store.setstarEnvironmentRating(value);
  }

  setCollaborator(value: number) {
    this.store.setstarCollaboratorRating(value);
  }

  setTime(value: number) {
    this.store.setstarstarTimeRating(value);
  }

  navigate() {
    const environment = this.store.starEnvironmentRating();
    const collaborator = this.store.starCollaboratorRating();
    const time = this.store.starTimeRating();

    console.log(environment, collaborator, time);

    if (environment !== null && collaborator !== null && time !== null) {
      this.router.navigate(['Cpf']);
    } else {
      this.store.showAlert = true;
      setTimeout(() => {
        this.store.showAlert = false;
      }, 3000);
    }
  }
}
