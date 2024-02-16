import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainExamComponent } from './main-exam.component';

describe('MainExamComponent', () => {
  let component: MainExamComponent;
  let fixture: ComponentFixture<MainExamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainExamComponent]
    });
    fixture = TestBed.createComponent(MainExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
