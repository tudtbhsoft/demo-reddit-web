import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { SubredditModel } from '../subreddit-response';
import { SubredditService } from '../subreddit.service';

@Component({
  selector: 'app-new-subreddits',
  templateUrl: './new-subreddits.component.html',
  styleUrls: ['./new-subreddits.component.css']
})
export class NewSubredditsComponent implements OnInit {


  createSubredditForm: FormGroup;
  subredditModel: SubredditModel;

  constructor(private router: Router, private subredditService: SubredditService) {
    this.createSubredditForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });

    this.subredditModel = {
      name: '',
      description: ''
    }
   }

  ngOnInit(): void {
  }

  discard() {
    this.router.navigateByUrl('/');
  }

  createSubreddit() {
    this.subredditModel.name = this.createSubredditForm.get('title')
    .value;
    this.subredditModel.description = this.createSubredditForm.get('description')
    .value;
    this.subredditService.createSubreddit(this.subredditModel).subscribe(data => {
      this.router.navigateByUrl('/create-post');
    }, error => {
      throwError(error);
    })
  }

}
