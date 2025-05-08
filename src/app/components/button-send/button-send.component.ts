import { Component, inject, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RatingStore } from '../../store/rating-store.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-send',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, CommonModule],
  templateUrl: './button-send.component.html',
  styleUrl: './button-send.component.css',
})
export class ButtonSendComponent {
  constructor(private route: Router) {}

  @Input() text!: String;
  ratingStore = inject(RatingStore);

  onClick() {
    this.ratingStore !== null
      ? this.route.navigate(['/home'])
      : console.log('null');
  }
}
