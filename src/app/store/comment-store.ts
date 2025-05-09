import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CommentStore {
  comment = signal<string>('');

  setComment(newComment: string) {
    this.comment.set(newComment);
  }
}
