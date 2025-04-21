import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type InputField = {
  id: number;
  label: string;
  isFocused?: boolean;
};

@Component({
  selector: 'app-sign-up',
  imports: [CommonModule],
  templateUrl: './sign-up.page.html',
  styleUrl: './sign-up.page.scss',
})
export class SignUpPage {
  protected readonly _fields: InputField[] = [
    {
      id: 1,
      label: 'Name',
    },
    {
      id: 2,
      label: 'E-mail or Phone Number',
    },
    {
      id: 3,
      label: 'Password',
    },
  ];

  protected onFocusInput = (field: InputField): void => {
    field.isFocused = true;
  };

  protected onBlurInput = (field: InputField): void => {
    field.isFocused = false;
  };
}
