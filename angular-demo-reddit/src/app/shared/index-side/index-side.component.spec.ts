import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexSideComponent } from './index-side.component';

describe('IndexSideComponent', () => {
  let component: IndexSideComponent;
  let fixture: ComponentFixture<IndexSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexSideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
