import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidator {
  static requiredField(control: AbstractControl): ValidationErrors | null {
    const value = (control.value as string)?.trim().length;

    if (!value || value === 0) {
      return { requiredField: true };
    }

    return null;
  }
}
