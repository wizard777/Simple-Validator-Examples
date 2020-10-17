import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';



export class PasswordValidator {


    public static hasNum(control: FormControl): ValidationErrors {
        const hasNumber = /\d/.test(control.value);
        ///  const hasUpper = /[A-Z]/.test(control.value);
        //  const hasLower = /[a-z]/.test(control.value);
        //  const hasMinLength = /[8,]/.test(control.value);
        // console.log('Num, Upp, Low', hasNumber, hasUpper, hasLower);
        // const valid = hasNumber && hasUpper && hasLower;
        // if (!valid) {
        // return what´s not valid
        //      return { strong: true };
        //  }
        return null;
    }


    static hasUpper(control: AbstractControl): ValidationErrors | null {
        const upper = /[A-Z]/.test(control.value);
        if (!upper) {
            return { hasUpper: true };
        }
        return null;
    }
    static hasNumber(control: AbstractControl): ValidationErrors | null {
        const oneNum = /\d/.test(control.value);
        if (!oneNum) {
            return { hasNumber: true };
        }
        return null;
    }
}










