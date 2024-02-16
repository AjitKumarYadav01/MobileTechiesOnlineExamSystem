import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddExamService } from 'src/app/examServices/add-exam.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-examform',
  templateUrl: './examform.component.html',
  styleUrls: ['./examform.component.scss']
})
export class ExamformComponent implements OnInit{

  AddPaperForm! : FormGroup;
  constructor(private fb : FormBuilder, private examServices: AddExamService, private router: Router) {
    this.AddPaperForm = this.fb.group({
      generalInstructions: ['', Validators.required],
      question:['',Validators.required],
      optionA: ['', Validators.required],
      optionB: ['', Validators.required],
      optionC: ['', Validators.required],
      optionD: ['', Validators.required],
      correctAnswer: ['', Validators.required],
      explanation: ['', Validators.required]

    });
  }

  ngOnInit(): void {

  }

  // onSubmit(){
  //   if(this.AddPaperForm.valid){
  //      // Form is valid, you can access the form values using this.AddPaperForm.value

  //     console.log(this.AddPaperForm.value);

  //     // Add your form submission logic here, e.g., sending data to the server


  //   }else{
  //     console.log("Form is not valid");
  //     //throw the error using toaster and with required fields

  //     alert("Your form is invalid");
  //   }
  // }


  onSubmit() {
    if (this.AddPaperForm.valid) {
      const formData = this.AddPaperForm.value;

      // Assuming you have a method in your exam service to add a new exam
      // this.examServices.addNewExamPaper(formData).subscribe({
      //   next: (res) => {
      //     alert(res.message);
      //     this.AddPaperForm.reset();
      //     // Optionally, you can navigate to a different route after successful submission
      //     // this.router.navigate(['']);
      //   },
      //   error: (err) => {
      //     alert(err?.error.message);
      //   }
      // });
    }
  }
}
