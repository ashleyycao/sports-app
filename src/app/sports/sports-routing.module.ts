import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SportsPage } from './sports.page';

const routes: Routes = [
  {
    path: '',
    component: SportsPage
  },
  {
    path: 'choice',
    loadChildren: () => import('./choice/choice.module').then( m => m.ChoicePageModule)
  },
  {
    path: 'comment',
    loadChildren: () => import('./comment/comment.module').then( m => m.CommentPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SportsPageRoutingModule {}
