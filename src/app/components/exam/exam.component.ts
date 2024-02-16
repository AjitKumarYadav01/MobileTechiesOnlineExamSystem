import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements AfterViewInit{

  constructor(){}

  // @ViewChild('setExamBtn') setExamBtn: ElementRef;
  // @ViewChild('attemptExamBtn') attemptExamBtn: ElementRef;

  ngAfterViewInit() {
    // this.setButtonClickHandler();
    // this.attemptButtonClickHandler();
  }

  isFormVisible: boolean = false;

  toggleForm() {
    this.isFormVisible = !this.isFormVisible;
  }

  // setButtonClickHandler() {
  //   this.setExamBtn.nativeElement.addEventListener('click', () => {
  //     // Your logic when "Set Exam" button is clicked
  //     console.log('Set Exam button clicked');
  //   });
  // }

  // attemptButtonClickHandler() {
  //   this.attemptExamBtn.nativeElement.addEventListener('click', () => {
  //     // Your logic when "Attempt Exam" button is clicked
  //     console.log('Attempt Exam button clicked');
  //   });
  // }
}
