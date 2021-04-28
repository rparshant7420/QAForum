import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddquesComponent } from '../addques/addques.component';
import {MatAccordion} from '@angular/material/expansion';
import { Router } from '@angular/router';
@Component({
  selector: 'app-question-answer',
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.css']
})
export class QuestionAnswerComponent implements OnInit {

  // @ViewChild(MatAccordion) accordian:MatAccordion;
  constructor(public dialog:MatDialog , private router:Router) { }

  openDialogue(){
    const dialogRef = this.dialog.open(AddquesComponent)
  }
  answers(){
    this.router.navigateByUrl('/answer')
  }

  ngOnInit(): void {
  }

}
