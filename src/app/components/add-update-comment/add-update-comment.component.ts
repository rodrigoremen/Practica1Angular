import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-update-comment',
  templateUrl: './add-update-comment.component.html',
  styleUrls: ['./add-update-comment.component.css']
})
export class AddUpdateCommentComponent {
  formComment: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.formComment = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      author: ['', Validators.required],
    })
  }

  addComment(){
    console.log(this.formComment);
    
  }
}
