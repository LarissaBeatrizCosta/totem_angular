import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ImageBackgroundComponent } from './components/image-background/image-background.component';
import { IndexView } from './views/index/index.component';
import { StarRatingView } from './views/star-rating/star-rating.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ImageBackgroundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  showLogo: boolean = true;
  private time: any;

  onChangeRoute(event: any) {
    this.showLogo = event.showLogo ?? true;
  }

  ngOnInit() {
    this.resetTimer();
    window.onload = this.resetTimer.bind(this);
    document.onmousemove = this.resetTimer.bind(this);
    document.onkeydown = this.resetTimer.bind(this);
  }
  resetTimer() {
    if (this.time) {
      clearTimeout(this.time);
    }

    this.time = setTimeout(() => {
      this.doSomething();
    }, 5000);
  }

  doSomething() {
    console.log('Resetando avaliações...');
  }
}
