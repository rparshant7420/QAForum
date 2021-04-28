import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreatecategoryComponent } from '../createcategory/createcategory.component';
import { CredentialhighlightComponent } from '../credentialhighlight/credentialhighlight.component';
import { InterestingpeoplesComponent } from '../interestingpeoples/interestingpeoples.component';

@Component({
  selector: 'app-profilecompo',
  templateUrl: './profilecompo.component.html',
  styleUrls: ['./profilecompo.component.css']
})
export class ProfilecompoComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  followinterests(){
   this.dialog.open(InterestingpeoplesComponent);
  }
  createcategory(){
    this.dialog.open(CreatecategoryComponent);
  }
  editcresentials(){
    this.dialog.open(CredentialhighlightComponent);
  }
}
