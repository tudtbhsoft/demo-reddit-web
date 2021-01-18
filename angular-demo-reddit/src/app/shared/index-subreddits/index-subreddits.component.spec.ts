import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexSubredditsComponent } from './index-subreddits.component';

describe('IndexSubredditsComponent', () => {
  let component: IndexSubredditsComponent;
  let fixture: ComponentFixture<IndexSubredditsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexSubredditsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexSubredditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
