import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUptadeComponentComponent } from './components/add-uptade-component/add-uptade-component.component';
import { ListCommentsComponent } from './components/list-comments/list-comments.component';
import { ShowCommentComponent } from './components/show-comment/show-comment.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUptadeComponentComponent,
    ListCommentsComponent,
    ShowCommentComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
