import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { AuthHttpService } from '../../../auth/services/auth.http.service';
import { Router, RouterLink } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  imports: [MatButton, MatToolbar, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  authHttpClient = inject(AuthHttpService);

  logout() {
    this.authHttpClient.logout().subscribe();
  }
}
