import { Component, inject } from '@angular/core';
import { ButtonSendComponent } from '../../components/button-send/button-send.component';
import { CommentStore } from '../../store/comment-store';
import { RateService } from '../../hooks/save-rate';

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

  setComment(newComment: string) {
    console.log(newComment);
    this.store.setComment(newComment);
  }

  save(){
    this.saveRateService.saveRate();
  }
}
