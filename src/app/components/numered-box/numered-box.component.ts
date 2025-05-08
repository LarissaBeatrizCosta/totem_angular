import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-numered-box',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './numered-box.component.html',
  styleUrl: './numered-box.component.css',
})
export class NumeredBoxComponent {
  @Input() number!: number;
  @Input() isSelected: boolean = true;
  @Output() clicked = new EventEmitter<number>();

  colorArray = [
    '#5A2318',
    '#A12017',
    '#E74C3C',
    '#F36B22',
    '#F89E1B',
    '#FCD43E',
    '#FFE349',
    '#B9D74B',
    '#C9D985',
    '#4BA048',
    '#0B8C4C',
  ];
ratingStore: any;

  onClick() {
    this.clicked.emit(this.number);
  }
}
