import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-password-validator',
  templateUrl: './password-validator.component.html',
  styleUrls: ['./password-validator.component.scss']
})
export class PasswordValidatorComponent implements OnInit, OnChanges {
  @Input() description: string;
  @Input() regex: any ;
  @Input() textValidation: string;

  img: string;
  imgCheckOK: string;
  imgCheckKO: string;

  constructor() {
    this.imgCheckOK = `${environment.imagesRoute}icons/check-ok.svg`;
    this.imgCheckKO = `${environment.imagesRoute}icons/check-ko.svg`;
    this.img = this.imgCheckKO;
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.textValidation) {
      this.validatePassword(changes.textValidation.currentValue);
    }
  }

  validatePassword(value: string) {
    if (this.textValidation || this.textValidation== "") {
      if (this.textValidation.match(this.regex))
        this.img = this.imgCheckOK;
      else
        this.img = this.imgCheckKO;
    }
    else{
      this.img = this.imgCheckKO;
    }
  }
}

