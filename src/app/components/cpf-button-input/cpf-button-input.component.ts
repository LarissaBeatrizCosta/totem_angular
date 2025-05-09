import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cpf-button-input',
  imports: [],
  standalone: true,
  templateUrl: './cpf-button-input.component.html',
  styleUrl: './cpf-button-input.component.css',
})
export class CpfButtonInputComponent {
  @Input() text!: string;
  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }
}
