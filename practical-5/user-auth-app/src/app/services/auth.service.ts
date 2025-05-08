// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = false;
  private currentUser: any = null;

  constructor() {}

  // Register method (simplified for this example)
  register(user: any) {
    localStorage.setItem(user.email, JSON.stringify(user)); // Store user info in local storage
  }

  // Login method
  login(email: string, password: string): boolean {
    const user = localStorage.getItem(email);
    if (user) {
      const parsedUser = JSON.parse(user);
      if (parsedUser.password === password) {
        this.isLoggedIn = true;
        this.currentUser = parsedUser;
        return true;
      }
    }
    return false;
  }

  // Get current user
  getCurrentUser() {
    console.log(this.currentUser); // Add this to check current user
    return this.currentUser;
  }

  // Check if user is logged in
  isUserLoggedIn() {
    return this.isLoggedIn;
  }
}
