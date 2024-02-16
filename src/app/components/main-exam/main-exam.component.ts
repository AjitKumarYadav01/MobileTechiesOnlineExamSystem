import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-exam',
  templateUrl: './main-exam.component.html',
  styleUrls: ['./main-exam.component.scss']
})
export class MainExamComponent implements  OnInit{
 
  //question :any =[1,2,3,4,5];
  //selectedButtons: boolean[] = [];
  selectquestion :any =[];

  constructor(private route: Router) { 

  }

  ngOnInit(): void {
      
  }

  selectAll(): void {
    this.selectquestion = new Array(this.selectquestion.length);


  }

onSubmit() {
    // Handle form submission logic here (e.g., save data)

    // Navigate to the next page or step
    this.route.navigate(['']);
}

  timeSlotsArray = Array.from({ length: 60 }, (_, i) => i + 1);
  // Other component logic...

   // Corrected function parameter name


  // hmsToSecondsOnly(time: string) {
  //   var p = time.split(':'),
  //       s = 0, m = 1;

  //   while (p.length > 0) {
  //       s += m * parseInt(p.pop(), 10);
  //       m *= 60;
  //   }

  //   return s;
  // }
}
