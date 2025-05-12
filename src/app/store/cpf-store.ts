import { Injectable, signal } from '@angular/core';
import { CpfFormatPipe } from '../pipes/cpf-format.pipe';

@Injectable({ providedIn: 'root' })
export class CpfStore {
  cpfUser = signal<string>('');
  private cpfFormatPipe = new CpfFormatPipe();

  getCpf() {
    return this.cpfUser();
  }

  setCpf(digits: string) {
    this.cpfUser.set(digits);
  }

  setCpfFormatted(digit: string) {
    const digitsOnly = this.cpfUser().replace(/\D/g, '') + digit;
    const formatted = this.cpfFormatPipe.transform(digitsOnly);
    this.cpfUser.set(formatted);
  }

  deleteDigit() {
    const digitsOnly = this.cpfUser().replace(/\D/g, '').slice(0, -1);
    const formatted = this.cpfFormatPipe.transform(digitsOnly);
    this.cpfUser.set(formatted);
  }
}
