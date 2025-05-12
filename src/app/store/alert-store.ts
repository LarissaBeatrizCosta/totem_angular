import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlertStore {
  public showAlert: boolean = false;
}
