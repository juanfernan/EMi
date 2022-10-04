import { AbstractControl, FormControl } from "@angular/forms";
import { environment } from "src/environments/environment";

export function ValidatorCheckBox(control: AbstractControl) {
    if (!control.value)
        return { invalidCheck: true };
    return null;
}

export function ValidatorDocumentType(control: AbstractControl) {

}

export function ValidatorStartCellPhoneNumber(control: AbstractControl) {
    if (!control.value.match(environment.regexStartCellPhoneNumber))
        return { invalidNumber: true }
    return null;
}

export function ValidatorStartPhoneNumber(control: AbstractControl) {
    if (control.value == "")
    return null;
    if (!control.value.match(environment.regexStartPhoneNumber))
        return { invalidPhoneNumber: true }
    return null;
}

export function EmailConfirmValidator(confirmEmailInput: string) {
    let confirmEmailControl: FormControl;
    let emailControl: FormControl;

    return (control: FormControl) => {
        if (!control.parent) {
            return null;
        }

        if (!confirmEmailControl) {
            confirmEmailControl = control;
            emailControl = control.parent.get(confirmEmailInput) as FormControl;
            emailControl.valueChanges.subscribe(() => {
                confirmEmailControl.updateValueAndValidity();
            });
        }

        if (emailControl.value.toLocaleLowerCase() !==
            confirmEmailControl.value.toLocaleLowerCase()
        ) {
            return { notMatch: true };
        }

        return null;
    };
}

export function EmailEqualsValidator(confirmEmailInput: string) {
    let confirmEmailControl: FormControl;
    let emailControl: FormControl;

    return (control: FormControl) => {
        if (!control.parent) {
            return null;
        }

        if (!confirmEmailControl) {
            confirmEmailControl = control;
            emailControl = control.parent.get(confirmEmailInput) as FormControl;
            emailControl.valueChanges.subscribe(() => {
                confirmEmailControl.updateValueAndValidity();
            });
        }

        if (emailControl.value.toLocaleLowerCase() !==
            confirmEmailControl.value.toLocaleLowerCase()
        ) {
            return { invalidEqualsEmail: true };
        }

        return null;
    };
}

export function onlyNumber(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}