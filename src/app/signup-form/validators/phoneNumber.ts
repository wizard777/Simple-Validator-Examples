import { AbstractControl, ValidationErrors } from '@angular/forms';


export class PhoneNumber {

    static phoneNumber(control: AbstractControl): ValidationErrors | null {
        const intigerNumber = /^[0-9]\d*$/.test(control.value);
        if (!intigerNumber) {
            return { phoneNumber: true };
        }
        return null;
    }
}
