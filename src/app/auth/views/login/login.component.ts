import { Component } from '@angular/core';
import {AuthHttpService} from '../../services/auth.http.service';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  protected form = new FormGroup({
    username: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    password: new FormControl('', { nonNullable: true, validators: [Validators.required] })
  });

  constructor(
    private authService: AuthHttpService
  ) { }

  protected onSubmit() {
    this.authService.login(this.form.getRawValue())
      .subscribe();
  }
}
