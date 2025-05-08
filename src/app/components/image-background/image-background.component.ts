import { NgIf } from '@angular/common';
import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-image-background',
  standalone: true,
  templateUrl: './image-background.component.html',
  styleUrls: ['./image-background.component.css'],
  imports: [NgIf],
})
export class ImageBackgroundComponent {
  @Input() showLogo: boolean = true;
}
