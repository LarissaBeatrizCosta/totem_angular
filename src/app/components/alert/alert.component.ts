import { Component, inject, Input } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AlertStore } from '../../store/alert-store';

@Component({
  selector: 'app-alert',
  imports: [MatToolbarModule],
  standalone: true,
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css',
})
export class AlertComponent {
  @Input() text: string = '';

}
