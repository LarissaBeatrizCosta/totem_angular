import { Component, inject } from '@angular/core';
import { ButtonSendComponent } from '../../components/button-send/button-send.component';
import { RateService } from '../../hooks/save-rate';
import { Router } from '@angular/router';
import { AppStore } from '../../store/app-store';

@Component({
  selector: 'app-comment',
  imports: [ButtonSendComponent],
  standalone: true,
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css',
})
export class CommentView {
  private store = inject(AppStore);
  private saveRateService = inject(RateService);
  private router = inject(Router);

  setComment(newComment: string) {
    console.log(newComment);
    this.store.setComment(newComment);
  }

  save() {
    this.router.navigate(['thanks']);
    this.saveRateService.saveRate();
  }
}
