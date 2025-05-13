import { NgIf } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-background',
  standalone: true,
  templateUrl: './image-background.component.html',
  styleUrls: ['./image-background.component.css'],
  imports: [NgIf],
})
export class ImageBackgroundComponent {
  @Input() showLogo: boolean = true;
  private router = inject(Router);
  
  navigate() {
    console.log('Redirecionando para login...');
    this.router.navigate(['Login']);
  }
}
