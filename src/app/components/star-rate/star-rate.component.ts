import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-star-rate',
  imports: [],
  standalone: true,
  templateUrl: './star-rate.component.html',
  styleUrl: './star-rate.component.css',
})
export class StarRateComponent {
  @Input() value: number = 0;
  @Output() clicked = new EventEmitter<number>();
  stars = [1, 2, 3, 4, 5];
  inactiveStar: string = 'assets/images/starlight.png';
  activeStar: string = 'assets/images/estrela_active.png';
  onClick(star: number) {
    this.value = star;
    this.clicked.emit(star);
  }
}
