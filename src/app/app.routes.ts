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
    path: 'stars',
    component: StarRatingView,
    data: { showLogo: false },
  },
  {
    path: 'cpf',
    component: UserCpfView,
  },
  {
    path: 'registerCpf',
    component: RegisterCpfView,
  },
  {
    path: 'comment',
    component: CommentView,
  },
  {
    path: 'thanks',
    component: ThanksView,
  },
  {
    path: 'login',
    component: LoginView,
  },
  {
    path: '**',
    redirectTo: ""
  },
];
