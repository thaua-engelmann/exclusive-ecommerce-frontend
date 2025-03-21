import { inject, Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class RegisterIconsService {

  private iconRegistry = inject(MatIconRegistry);
  private domSanitizer = inject(DomSanitizer);

  public register = (icons: string[]) => {

    if (!icons.length) {
      throw new Error('Icons array is empty');
    }

    icons.forEach(icon => {
      this.iconRegistry.addSvgIcon(icon, this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${icon}.svg`));
    });

  }

}
