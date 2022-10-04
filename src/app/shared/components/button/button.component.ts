import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ButtonType } from '../../enums/enumerations';
import { ButtonConfiguration } from '../../models/button-configuration';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {

  @Input() configuration: ButtonConfiguration;
  @Input() disabled: boolean;
  @Output() onClick = new EventEmitter<any>();

  widthButton: string;
  heightButton: string;
  colorClassName: string;
  urlImage: string;
  style: any;
  styleWithInImg: any;
  fontSize: string;

  constructor() {
  }

  ngOnInit() {
    this.urlImage = `${environment.imagesRoute}icons/${this.configuration.imageName}`;
    this.setStyle();
  }

  setStyle() {
    this.configuration.width ? this.widthButton = this.configuration.width : this.widthButton = "";
    this.configuration.height ? this.heightButton = this.configuration.height : this.heightButton = "40px";

    switch (this.configuration.buttonType) {
      case ButtonType.Primary:
        this.colorClassName = 'color-button-primary';
        break;
      case ButtonType.Secundary:
        this.colorClassName = 'color-button-secondary';
        break;
      case ButtonType.Tertiary:
        this.colorClassName = 'color-button-ternary';
        break;
    }

    this.configuration.fontsSize ? this.fontSize = this.configuration.fontsSize : this.fontSize = "20px";

    this.style = {
      width: this.widthButton,
      height: this.heightButton,
      border: '1px',
      display: 'flex',
      alignItems: 'center',
      fontsSize: this.fontSize,
      borderRadius: '25px',
      fontWeight: '500',
      text: this.configuration.text,
      lineHeight: this.configuration.lineHeight
    }
    this.styleWithInImg = {
      width: this.widthButton,
      height: this.heightButton,
      border: '1px',
      display: 'flex',
      alignItems: 'center',
      fontsSize: this.fontSize,
      borderRadius: '25px',
      fontWeight: '500',
      text: this.configuration.text,
      lineHeight: this.configuration.lineHeight
    }
  }

  onClickButton(event: any) {
    this.onClick.emit(event);
  }

}
