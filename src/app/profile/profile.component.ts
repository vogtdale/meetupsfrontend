import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: any;
  constructor(private profileuser: ProfileService) {


  }

  ngOnInit() {
  }

  userProfile() {
    this.profile = JSON.parse(localStorage.getItem('token'));
    console.log(this.profile);
  }

}
