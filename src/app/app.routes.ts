import { Routes } from '@angular/router';
import { IndexView } from './views/index/index.component';
import { StarRatingView } from './views/star-rating/star-rating.component';
import { UserCpfView } from './views/user-cpf/user-cpf.component';
import { RegisterCpfView } from './views/register-cpf/register-cpf.component';
import { CommentView } from './views/comment/comment.component';
import { ThanksView } from './views/thanks/thanks.component';
import { LoginView } from './views/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: IndexView,
  },
  {
    path: 'Stars',
    component: StarRatingView,
    data: { showLogo: false },
  },
  {
    path: 'Cpf',
    component: UserCpfView,
  },
  {
    path: 'RegisterCpf',
    component: RegisterCpfView,
  },
  {
    path: 'Comment',
    component: CommentView,
  },
  {
    path: 'Thanks',
    component: ThanksView,
  },
  {
    path: 'Login',
    component: LoginView,
  },
  {
    path: '**',
    redirectTo: ""
  },
];
