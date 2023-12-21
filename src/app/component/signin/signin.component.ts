import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { User } from '../../model/User';
import { UserCredentials } from '../../model/userCredentials.model';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule, CommonModule,ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {

  registerForm: FormGroup;
  registerError: boolean = false;
  loggedIn: boolean = false;
  userCredentials = {
    pseudo: "",
    password: "",
    prenom: "",
    nom: "",
    picture: null
}

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = fb.group({
      pseudo: ['', Validators.required],
      password: ['', Validators.required],
      prenom: ['', Validators.required],
      nom: ['', Validators.required]
    });
  }


  onSubmit() {
    this.userCredentials.pseudo = this.registerForm.get('pseudo')?.value;
    this.userCredentials.password = this.registerForm.get('password')?.value;
    this.userCredentials.prenom = this.registerForm.get('prenom')?.value;
    this.userCredentials.nom = this.registerForm.get('nom')?.value;

    this.authService.register(this.userCredentials).subscribe(
      data => {
        this.loggedIn = true;
        this.registerError = false;
        this.router.navigate(['/register']);
      },
      error => {
        this.registerError = true;
      }
    );

    }

}
