import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comment } from 'src/app/interfaces/Comments';

@Component({
  selector: 'app-add-uptade-component',
  templateUrl: './add-uptade-component.component.html',
  styleUrls: ['./add-uptade-component.component.css']
})
export class AddUptadeComponentComponent {
  formComment : FormGroup

  constructor(private fb:FormBuilder){
    this.formComment = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      author: ['', Validators.required]
    })
  }

  addComment(){
    console.log(this.formComment);
    const comment: Comment = {
      title: this.formComment.get('title')?.value,
      description: this.formComment.get('description')?.value,
      author: this.formComment.get('author')?.value,
      createdAt: new Date()
    }
  }
}
