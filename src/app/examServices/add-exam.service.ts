import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddExamService {

//  private baseUrl: string = "https://localhost:44385/api/User/";
  
  constructor( private http : HttpClient) {

   }

   //this the method for add Exam paper
   addNewExamPaper(){

   }
}
