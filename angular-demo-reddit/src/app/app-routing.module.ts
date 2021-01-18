import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './body/auth.guard';
import { IndexComponent } from './body/index/index.component';
import { LoginComponent } from './body/login/login.component';
import { RegisterComponent } from './body/register/register.component';
import { UserComponent } from './body/user/user.component';
import { ListPostComponent } from './post/list-post/list-post.component';
import { NewPostComponent } from './post/new-post/new-post.component';
import { ListSubredditsComponent } from './subreddits/list-subreddits/list-subreddits.component';
import { NewSubredditsComponent } from './subreddits/new-subreddits/new-subreddits.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'create-post', component: NewPostComponent,  canActivate: [AuthGuard]},
  { path: 'create-subreddit', component: NewSubredditsComponent, canActivate: [AuthGuard]},
  { path: 'list-subreddits', component: ListSubredditsComponent },
  { path: 'list-post/:id', component: ListPostComponent },
  { path: 'user-profile/:name', component: UserComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
