import { Component, signal, inject } from '@angular/core';
import { AuthHttpService } from '../../services/auth.http.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatCard, MatCardContent, MatCardFooter, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatInput, MatSuffix } from '@angular/material/input';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    MatCard,
    MatCardTitle,
    MatCardHeader,
    MatCardContent,
    ReactiveFormsModule,
    MatError,
    MatFormField,
    MatIcon,
    MatInput,
    MatLabel,
    MatButton,
    MatIconButton,
    MatSuffix,
    MatCardFooter,
    RouterLink,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  private authService = inject(AuthHttpService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  protected form = new FormGroup({
    username: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(6)],
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
  });

  showPassword = signal(false);

  constructor() {
    if (this.authService.isAuthenticated()) {
      void this.router.navigate(['']);
    }
  }

  protected onSubmit() {
    this.authService.register(this.form.getRawValue()).subscribe({
      next: () => this.forwardLoggedIn(),
      error: () => this.form.setErrors([true]),
    });
  }

  forwardLoggedIn() {
    const returnUrl = this.route.snapshot.queryParams['return_url'] || '';
    void this.router.navigate([returnUrl], { replaceUrl: true });
  }

  togglePasswordVisibility($event: MouseEvent) {
    this.showPassword.set(!this.showPassword());
    $event.stopPropagation();
  }
}
