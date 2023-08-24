import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUptadeComponentComponent } from './components/add-uptade-component/add-uptade-component.component';
import { ListCommentsComponent } from './components/list-comments/list-comments.component';
import { ShowCommentComponent } from './components/show-comment/show-comment.component';


const routes: Routes = [
  {path: '', component: ListCommentsComponent},
  {path: 'addComment', component: AddUptadeComponentComponent},
  {path: 'showComment/:id', component: ShowCommentComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
