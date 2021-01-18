import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BarComponent } from './bar/bar.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './body/register/register.component';
import { IndexComponent } from './body/index/index.component';
import { LoginComponent } from './body/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ErrorComponent } from './body/error/error.component';
import { IndexPostComponent } from './shared/index-post/index-post.component';
import { IndexSubredditsComponent } from './shared/index-subreddits/index-subreddits.component';
import { IndexSideComponent } from './shared/index-side/index-side.component';
import { NewSubredditsComponent } from './subreddits/new-subreddits/new-subreddits.component';
import { NewPostComponent } from './post/new-post/new-post.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TokenInterceptor } from './token-interceptor';
import { VoteButtonComponent } from './shared/vote-button/vote-button.component';
import { ListPostComponent } from './post/list-post/list-post.component';
import { ListSubredditsComponent } from './subreddits/list-subreddits/list-subreddits.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserComponent } from './body/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BarComponent,
    FooterComponent,
    RegisterComponent,
    IndexComponent,
    LoginComponent,
    ErrorComponent,
    IndexPostComponent,
    IndexSubredditsComponent,
    IndexSideComponent,
    NewSubredditsComponent,
    NewPostComponent,
    VoteButtonComponent,
    ListPostComponent,
    ListSubredditsComponent,
    UserComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FontAwesomeModule,
    EditorModule,
    NgbModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
