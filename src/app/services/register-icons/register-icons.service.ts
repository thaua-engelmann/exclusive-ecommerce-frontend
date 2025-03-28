import { isPlatformServer } from '@angular/common';
import { Inject, inject, Injectable, PLATFORM_ID } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class RegisterIconsService {

  private iconRegistry = inject(MatIconRegistry);
  private domSanitizer = inject(DomSanitizer);

  constructor(
    @Inject(PLATFORM_ID) private platformId: string
  ) {}

  public register = (icons: string[]) => {

    if (!icons.length) {
      throw new Error('Icons array is empty');
    }

    icons.forEach(icon => {

      if (isPlatformServer(this.platformId)) {
        this.iconRegistry.addSvgIconLiteral(icon, this.domSanitizer.bypassSecurityTrustHtml('<svg></svg>'));
      } else {
        this.iconRegistry.addSvgIcon(icon, this.domSanitizer.bypassSecurityTrustResourceUrl(`${window.location.origin}/assets/icons/${icon}.svg`));
      }

    });

  }

}
