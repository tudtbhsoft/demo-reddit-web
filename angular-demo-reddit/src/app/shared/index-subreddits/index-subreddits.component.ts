import { Component, OnInit } from '@angular/core';
import { SubredditModel } from 'src/app/subreddits/subreddit-response';
import { SubredditService } from 'src/app/subreddits/subreddit.service';

@Component({
  selector: 'app-index-subreddits',
  templateUrl: './index-subreddits.component.html',
  styleUrls: ['./index-subreddits.component.css']
})
export class IndexSubredditsComponent implements OnInit {

  subreddits: Array<SubredditModel>;
  displayViewAll: boolean;

  constructor(private subredditService: SubredditService) {
    this.subredditService.getAllSubreddits().subscribe(data => {
      if (data.length > 3) {
        this.subreddits = data.splice(0, 3);
        this.displayViewAll = true;
      } else {
        this.subreddits = data;
      }
    });
  }

  ngOnInit(): void {
  }

}
