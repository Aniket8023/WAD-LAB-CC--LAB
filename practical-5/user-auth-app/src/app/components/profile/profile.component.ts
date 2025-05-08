import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
userList: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    console.log(this.user);  // Debugging line
  
    if (!this.user  || !this.user.email) {
      this.router.navigate(['/login']);
      return;
    }
  
    this.userList = [this.user.name, this.user.email];
    console.log(this.userList);  // Debugging line
  }
  
  
  onLogout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
