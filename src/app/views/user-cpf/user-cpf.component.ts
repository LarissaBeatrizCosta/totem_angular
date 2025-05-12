import { Component, HostListener, inject } from '@angular/core';
import { ButtonSendComponent } from '../../components/button-send/button-send.component';
import { Router } from '@angular/router';
import { RateService } from '../../hooks/save-rate';
import { resetTimer } from '../../hooks/reset-timer';

@Component({
  selector: 'app-user-cpf',
  imports: [ButtonSendComponent],
  standalone: true,
  templateUrl: './user-cpf.component.html',
  styleUrl: './user-cpf.component.css',
})
export class UserCpfView {
  private router = inject(Router);
  private saveRateService = inject(RateService);
  size = window.innerWidth > 850;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.size = window.innerWidth > 850;
  }
  navigateToRegisterCpf() {
    this.router.navigate(['RegisterCpf']);
  }

  navigateToThanks() {
    this.saveRateService.saveRate();
    this.router.navigate(['Thanks']);
  }
}
