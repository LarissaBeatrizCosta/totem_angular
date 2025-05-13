import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonSendComponent } from '../../components/button-send/button-send.component';
import { AlertStore } from '../../store/alert-store';
import { FormsModule } from '@angular/forms';
import validator from 'email-validator';

@Component({
  selector: 'app-login',
  imports: [ButtonSendComponent, FormsModule],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginView {
  private router = inject(Router);
  private showAlert = inject(AlertStore);
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

      this.showAlert.showAlert = true;
      setTimeout(() => {
        this.showAlert.showAlert = false;
      }, 3000);
    }
  }
}
