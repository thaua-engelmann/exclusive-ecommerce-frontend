import { Component, Inject, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RegisterIconsService } from 'src/app/services/register-icons/register-icons.service';

type NavbarItem = {id: number; text: string};

@Component({
  selector: 'app-header',
  imports: [CommonModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {

  private registerIconsService = inject(RegisterIconsService);

  constructor(
    @Inject(PLATFORM_ID) private platformId: string
  ) {
      this.registerIconsService.register(['search']);
  }

  protected readonly _navbarItems: NavbarItem[] = [
    {
      id: 1,
      text: "Home"
    },
    {
      id: 2,
      text: "Contact"
    },
    {
      id: 3,
      text: "About"
    },
    {
      id: 4,
      text: "Sign Up"
    },
  ]

  ngOnInit(): void {
    const teste = ''
    teste.replace('', '');
  }

}
