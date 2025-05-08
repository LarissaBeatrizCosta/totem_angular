import { Component } from '@angular/core';
import { StarRateComponent } from "../../components/star-rate/star-rate.component";

@Component({
  selector: 'app-star-rating',
  imports: [StarRateComponent],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css'
})
export class StarRatingView {
   showLogo : boolean = false;
}
