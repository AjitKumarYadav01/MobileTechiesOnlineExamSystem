import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamInstructComponent } from './exam-instruct.component';

describe('ExamInstructComponent', () => {
  let component: ExamInstructComponent;
  let fixture: ComponentFixture<ExamInstructComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamInstructComponent]
    });
    fixture = TestBed.createComponent(ExamInstructComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
