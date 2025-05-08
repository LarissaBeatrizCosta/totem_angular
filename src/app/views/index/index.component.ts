import { Component } from '@angular/core';
import { NumeredListComponent } from "../../components/numered-list/numered-list.component";

@Component({
  selector: 'app-index',
  imports: [ NumeredListComponent],
  standalone: true,
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

}
