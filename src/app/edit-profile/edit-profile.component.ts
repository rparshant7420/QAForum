import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(public userServices:UserService) { }

  ngOnInit(): void {
  }

  onSubmit(data:NgForm){
    this.userServices.editUser(data.value).subscribe((res)=>{
      console.log(res);
      location.reload();
    })
  }
}
