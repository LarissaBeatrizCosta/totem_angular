import { Component, inject } from '@angular/core';
import { ButtonSendComponent } from '../../components/button-send/button-send.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-cpf',
  imports: [ButtonSendComponent],
  standalone: true,
  templateUrl: './user-cpf.component.html',
  styleUrl: './user-cpf.component.css',
})
export class UserCpfView {
  private router = inject(Router);

  navigateToRegisterCpf() {
    this.router.navigate(['RegisterCpf']);
  }

  navigateToThanks() {
    this.router.navigate(['']);
  }
}
