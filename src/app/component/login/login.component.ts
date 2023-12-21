import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../../service/users.service';
import { Router } from '@angular/router';
import { UserCredentials } from '../../model/userCredentials.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  loginForm: FormGroup;
  loginError: boolean = false;
  loggedIn: boolean = false;
  userCredentials: UserCredentials;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = fb.group({
      username: '',
      password: ''
    });
    this.userCredentials = {
      username: '',
      password: ''
    };
  }

  onSubmit() {
    this.userCredentials.username = this.loginForm.get('username')?.value;
    this.userCredentials.password = this.loginForm.get('password')?.value;

      this.authService.login(this.userCredentials).subscribe(
        (data: any) => {
          if (data) {
            localStorage.setItem("user", JSON.stringify(data));
            this.loggedIn = true;
            this.router.navigateByUrl('/home');
          }
        },
        (error: any) => {
          this.loginError = true;
          console.error('Error login', error);
        }
      );
    }
  }
