import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ImageBackgroundComponent } from "./components/image-background/image-background.component";
import { IndexComponent } from "./views/index/index.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ImageBackgroundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
