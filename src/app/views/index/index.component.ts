import { Component } from '@angular/core';
import { NumeredListComponent } from "../../components/numered-list/numered-list.component";
import { ButtonSendComponent } from "../../components/button-send/button-send.component";

@Component({
  selector: 'app-index',
  imports: [NumeredListComponent, ButtonSendComponent],
  standalone: true,
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexView {
}
