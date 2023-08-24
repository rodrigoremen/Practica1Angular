import { Component } from '@angular/core';
import { Comment } from 'src/app/interfaces/Comments';

@Component({
  selector: 'app-list-comments',
  templateUrl: './list-comments.component.html',
  styleUrls: ['./list-comments.component.css']
})
export class ListCommentsComponent {
  listComments: Comment[] = [
    {title: 'test1', author: 'isaac suku', description: 'idk', createdAt: new Date()},
    {title: 'test2', author: 'isaac suku', description: 'idk', createdAt: new Date()},
    {title: 'test3', author: 'isaac suku', description: 'idk', createdAt: new Date()},
    {title: 'test4', author: 'isaac suku', description: 'idk', createdAt: new Date()},

  ]
}
