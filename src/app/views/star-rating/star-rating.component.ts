import { Component, inject } from '@angular/core';
import { StarRateComponent } from "../../components/star-rate/star-rate.component";
import { ButtonSendComponent } from "../../components/button-send/button-send.component";
import { Router } from '@angular/router';
import { StarsStore } from '../../store/rating-stars.component';

@Component({
  selector: 'app-star-rating',
  imports: [StarRateComponent, ButtonSendComponent],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css'
})
export class StarRatingView {
  private router = inject(Router);
  private starsStore = inject(StarsStore);
   showLogo : boolean = false;

   setEnvironment(value: number) {
    this.starsStore.setstarEnvironmentRating(value);
  }

  setCollaborator(value: number) {
    this.starsStore.setstarCollaboratorRating(value);
  }

  setTime(value: number) {
    this.starsStore.setstarstarTimeRating(value);
  }


   navigate() {
    const environment = this.starsStore.starEnvironmentRating();
    const collaborator = this.starsStore.starCollaboratorRating();
    const time = this.starsStore.starTimeRating();

    console.log(environment, collaborator, time);

    if (environment !== null && collaborator !== null && time !== null) {
      this.router.navigate(['']);
    } else {
      console.log('Nota não selecionada');
    }
  }
}
