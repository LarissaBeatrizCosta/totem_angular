import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-send',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, CommonModule],
  templateUrl: './button-send.component.html',
  styleUrl: './button-send.component.css',
})
export class ButtonSendComponent {
  @Input() text?: string;
  @Input() color: string = '#F89E1B';
  @Input() width?: string;
  @Input() height?: string;
  @Input() fontSize?: string;
  @Output() clicked = new EventEmitter<void>();
  private router = inject(Router);


  onClick() {
    this.clicked.emit();
  }

  isCommentRoute(): boolean {
    return this.router.url.includes('Comment');
  }
}
