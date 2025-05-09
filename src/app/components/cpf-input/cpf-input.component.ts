import { Component, inject } from '@angular/core';
import { CpfStore } from '../../store/cpf-store.component';
import { CpfButtonInputComponent } from "../cpf-button-input/cpf-button-input.component";

@Component({
  selector: 'app-cpf-input',
  imports: [CpfButtonInputComponent],
  standalone: true,
  templateUrl: './cpf-input.component.html',
  styleUrl: './cpf-input.component.css',
})
export class CpfInputComponent {
  buttonsCpfInput = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '⌫'];
  cpfStore = inject(CpfStore);

  cpfValue() {
    return this.cpfStore.getCpf();
  }

  onClick(value: string) {
    value === '⌫' ? this.cpfStore.deleteDigit() : this.cpfStore.setCpf(value);
  }
}
