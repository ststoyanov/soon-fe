import { Component, signal } from '@angular/core';
import { AuthHttpService } from '../../services/auth.http.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { MatError, MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatError,
    MatFormField,
    MatIconButton,
    MatIcon,
    MatButton,
    MatInput,
    MatLabel,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  protected form = new FormGroup({
    username: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  showPassword = signal(false);

  constructor(private authService: AuthHttpService) {}

  protected onSubmit() {
    this.authService.login(this.form.getRawValue()).subscribe();
  }

  togglePasswordVisibility($event: MouseEvent) {
    this.showPassword.set(!this.showPassword());
    $event.stopPropagation();
  }
}
