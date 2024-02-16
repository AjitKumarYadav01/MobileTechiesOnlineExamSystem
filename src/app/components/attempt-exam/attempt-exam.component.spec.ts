import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttemptExamComponent } from './attempt-exam.component';

describe('AttemptExamComponent', () => {
  let component: AttemptExamComponent;
  let fixture: ComponentFixture<AttemptExamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttemptExamComponent]
    });
    fixture = TestBed.createComponent(AttemptExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
