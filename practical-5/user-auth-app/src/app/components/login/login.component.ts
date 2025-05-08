import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onLogin() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const formValue = this.loginForm.value;
    console.log(user);
    if (user.email === formValue.email && user.password === formValue.password) {
      this.router.navigate(['/profile']);
    } else {
      alert('Invalid credentials!');
    }
  }
}
