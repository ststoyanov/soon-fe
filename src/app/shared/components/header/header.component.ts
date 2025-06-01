import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { AuthHttpService } from '../../../auth/services/auth.http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MatButton],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(
    protected authService: AuthHttpService,
    private router: Router
  ) {}

  logout() {
    this.authService.logout().subscribe(() => this.router.navigate(['']));
  }
}
