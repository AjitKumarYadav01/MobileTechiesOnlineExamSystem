import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attempt-exam',
  templateUrl: './attempt-exam.component.html',
  styleUrls: ['./attempt-exam.component.scss']
})
export class AttemptExamComponent  implements OnInit{
  constructor(){

  }
  ngOnInit(): void {

  }
  openModel(){
    const modelDiv = document.getElementById('dataAnalystModal');
    if(modelDiv != null){
      modelDiv.style.display='block' ;
    }
  }

  closeModel(){
    const modelDiv = document.getElementById('dataAnalystModal');
    if(modelDiv != null){
      modelDiv.style.display='none' ;
    }
  }
}
