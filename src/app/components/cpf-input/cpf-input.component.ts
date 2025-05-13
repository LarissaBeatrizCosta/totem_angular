import { Component, inject } from '@angular/core';
import { CpfButtonInputComponent } from "../cpf-button-input/cpf-button-input.component";
import { AppStore } from '../../store/app-store';

@Component({
  selector: 'app-cpf-input',
  imports: [CpfButtonInputComponent],
  standalone: true,
  templateUrl: './cpf-input.component.html',
  styleUrl: './cpf-input.component.css',
})
export class CpfInputComponent {
  buttonsCpfInput = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '⌫'];
  store = inject(AppStore);

  cpfValue() {
    return this.store.getCpf();
  }

  onClick(value: string) {
    value === '⌫' ? this.store.deleteDigit() : this.store.setCpfFormatted(value);
  }
}
