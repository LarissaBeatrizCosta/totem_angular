import { Component } from '@angular/core';
import { StarRateComponent } from "../../components/star-rate/star-rate.component";
import { ButtonSendComponent } from "../../components/button-send/button-send.component";

@Component({
  selector: 'app-star-rating',
  imports: [StarRateComponent, ButtonSendComponent],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css'
})
export class StarRatingView {
   showLogo : boolean = false;
}
