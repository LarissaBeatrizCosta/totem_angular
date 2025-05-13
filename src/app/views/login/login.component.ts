import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonSendComponent } from '../../components/button-send/button-send.component';
import { FormsModule } from '@angular/forms';
import validator from 'email-validator';
import { AlertComponent } from '../../components/alert/alert.component';
import { AppStore } from '../../store/app-store';

@Component({
  selector: 'app-login',
  imports: [ButtonSendComponent, FormsModule, AlertComponent],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginView {
  private router = inject(Router);
  store = inject(AppStore);
  showLogo: boolean = false;
  emailValue = '';
  password = '';

  setLogin() {
    if (
      validator.validate(this.emailValue) &&
      this.password !== null &&
      this.password !== ''
    ) {
      this.router.navigate(['']);
    } else {
      console.log('Por favor, digite um email válido');
      console.log(this.password);
      console.log(this.emailValue);

      this.store.showAlert = true;
      setTimeout(() => {
        this.store.showAlert = false;
      }, 3000);
    }
  }
}
