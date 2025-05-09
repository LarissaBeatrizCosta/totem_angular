import { Component, inject } from '@angular/core';
import { CpfInputComponent } from '../../components/cpf-input/cpf-input.component';
import { ButtonSendComponent } from '../../components/button-send/button-send.component';
import { CpfStore } from '../../store/cpf-store';
import { Router } from '@angular/router';
import isValidCpf from '../../utils/valid-cpf';

@Component({
  selector: 'app-register-cpf',
  imports: [CpfInputComponent, ButtonSendComponent],
  standalone: true,
  templateUrl: './register-cpf.component.html',
  styleUrl: './register-cpf.component.css',
})
export class RegisterCpfView {
  private store = inject(CpfStore);
  private router = inject(Router);

  navigate() {
    if (this.store.cpfUser() !== null && isValidCpf(this.store.cpfUser())) {
      this.router.navigate(['Comment']);
    } else {
      console.log('CPF não informado');
    }
  }
}
