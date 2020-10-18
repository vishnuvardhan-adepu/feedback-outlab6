import { Component, OnInit, Input } from '@angular/core';
import {student} from '../student';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class formcomponent implements OnInit {
  intialstudent: student;
  errorMessage: any;
  constructor(private studentservice: StudentService){}
  ngOnInit() {
    this.getstudent();
  }
  getstudent(): void{
    this.studentservice.getstudent()
      .subscribe(student => this.intialstudent = student);
  }

  high(): void{this.intialstudent.feedback = 'Great'; }
  average(): void{this.intialstudent.feedback = 'Okay'; }
  low(): void{this.intialstudent.feedback = 'Not Good'; }
  Submit(): void{
    this.studentservice.getupdated(this.intialstudent)
       .subscribe({
        next: student => {this.intialstudent = student;
                          this.errorMessage = 'feedback was successfully submitted';
      },
      error: error => {
          this.errorMessage = error.message;
          console.error('There was an error!', error);
      }
    }); }
}
