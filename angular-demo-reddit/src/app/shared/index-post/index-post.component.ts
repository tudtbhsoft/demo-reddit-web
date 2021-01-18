import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { PostModel } from '../post-model';

@Component({
  selector: 'app-index-post',
  templateUrl: './index-post.component.html',
  styleUrls: ['./index-post.component.css'],
})
export class IndexPostComponent implements OnInit {
  faComments = faComments;
  @Input() posts: PostModel[];


  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToPost(id: number): void {
    this.router.navigateByUrl('/list-post/' + id);
  }


}
