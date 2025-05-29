import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { AuthHttpClient } from '../../../auth/auth-http-client';
import { RouterLink } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  imports: [MatButton, MatToolbar, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  authHttpClient = inject(AuthHttpClient);

  logout() {
    this.authHttpClient.logout().subscribe();
  }
}
