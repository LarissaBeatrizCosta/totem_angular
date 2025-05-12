import { Component, inject } from '@angular/core';
import { CpfInputComponent } from '../../components/cpf-input/cpf-input.component';
import { ButtonSendComponent } from '../../components/button-send/button-send.component';
import { CpfStore } from '../../store/cpf-store';
import { Router } from '@angular/router';
import isValidCpf from '../../utils/valid-cpf';
import { AlertStore } from '../../store/alert-store';
import { AlertComponent } from "../../components/alert/alert.component";

@Component({
  selector: 'app-register-cpf',
  imports: [CpfInputComponent, ButtonSendComponent, AlertComponent],
  standalone: true,
  templateUrl: './register-cpf.component.html',
  styleUrl: './register-cpf.component.css',
})
export class RegisterCpfView {
  private store = inject(CpfStore);
  private router = inject(Router);
  showAlert = inject(AlertStore);

  navigate() {
    if (this.store.cpfUser() !== null && isValidCpf(this.store.cpfUser())) {
      this.router.navigate(['Comment']);
    } else {
      this.showAlert.showAlert = true;
      setTimeout(() => {
        this.showAlert.showAlert = false;
      }, 3000);
    }
  }
}
