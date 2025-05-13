import { Component, HostListener, inject } from '@angular/core';
import { CpfInputComponent } from '../../components/cpf-input/cpf-input.component';
import { ButtonSendComponent } from '../../components/button-send/button-send.component';
import { Router } from '@angular/router';
import isValidCpf from '../../utils/valid-cpf';
import { AlertComponent } from '../../components/alert/alert.component';
import { AppStore } from '../../store/app-store';

@Component({
  selector: 'app-register-cpf',
  imports: [CpfInputComponent, ButtonSendComponent, AlertComponent],
  standalone: true,
  templateUrl: './register-cpf.component.html',
  styleUrl: './register-cpf.component.css',
})
export class RegisterCpfView {
  store = inject(AppStore);
  private router = inject(Router);
  size = window.innerWidth > 850;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.size = window.innerWidth > 850;
  }
  navigate() {
    if (this.store.cpfUser() !== null && isValidCpf(this.store.cpfUser())) {
      this.router.navigate(['comment']);
    } else {
      this.store.showAlert = true;
      setTimeout(() => {
        this.store.showAlert = false;
      }, 3000);
    }
  }
}
