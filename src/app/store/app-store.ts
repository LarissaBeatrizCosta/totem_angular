import { Injectable, signal } from '@angular/core';
import { CpfFormatPipe } from '../pipes/cpf-format.pipe';

@Injectable({ providedIn: 'root' })
export class AppStore {
  comment = signal<string>('');
  cpfUser = signal<string>('');
  private cpfFormatPipe = new CpfFormatPipe();
  starEnvironmentRating = signal<number | null>(null);
  starCollaboratorRating = signal<number | null>(null);
  starTimeRating = signal<number | null>(null);
  recommendationRating = signal<number | null>(null);
  public showAlert: boolean = false;
  
  setComment(newComment: string) {
    this.comment.set(newComment);
  }
  getCpf() {
    return this.cpfUser();
  }

  setCpf(digits: string) {
    this.cpfUser.set(digits);
  }

  setCpfFormatted(digit: string) {
    const digitsOnly = this.cpfUser().replace(/\D/g, '') + digit;
    const formatted = this.cpfFormatPipe.transform(digitsOnly);
    this.cpfUser.set(formatted);
  }

  deleteDigit() {
    const digitsOnly = this.cpfUser().replace(/\D/g, '').slice(0, -1);
    const formatted = this.cpfFormatPipe.transform(digitsOnly);
    this.cpfUser.set(formatted);
  }

  setstarstarTimeRating(newRating: number | null) {
    this.starTimeRating.set(newRating);
  }
  setstarCollaboratorRating(newRating: number | null) {
    this.starCollaboratorRating.set(newRating);
  }
  setstarEnvironmentRating(newRating: number | null) {
    this.starEnvironmentRating.set(newRating);
  }
  setRecommendationRating(newRating: number | null) {
    this.recommendationRating.set(newRating);
  }
}
