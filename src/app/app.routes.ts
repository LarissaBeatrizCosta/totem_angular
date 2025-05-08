import { Routes } from '@angular/router';
import { IndexView } from './views/index/index.component';
import { StarRatingView } from './views/star-rating/star-rating.component';

export const routes: Routes = [
  {
    path: '',
    component: IndexView,
    data: { showLogo: true },
  },
  {
    path: 'home',
    component: StarRatingView,
    data: { showLogo: false },
  },
];
