import { Component, inject } from '@angular/core';
import { ButtonSendComponent } from '../../components/button-send/button-send.component';
import { CommentStore } from '../../store/comment-store';
import { RateService } from '../../hooks/save-rate';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comment',
  imports: [ButtonSendComponent],
  standalone: true,
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css',
})
export class CommentView {
  private store = inject(CommentStore);
  private saveRateService = inject(RateService);
  private router = inject(Router);

  setComment(newComment: string) {
    console.log(newComment);
    this.store.setComment(newComment);
  }

  save() {
    this.router.navigate(['Thanks']);
    this.saveRateService.saveRate();
  }
}
