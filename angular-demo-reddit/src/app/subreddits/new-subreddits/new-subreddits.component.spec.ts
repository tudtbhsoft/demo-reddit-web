import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSubredditsComponent } from './new-subreddits.component';

describe('NewSubredditsComponent', () => {
  let component: NewSubredditsComponent;
  let fixture: ComponentFixture<NewSubredditsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSubredditsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSubredditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
