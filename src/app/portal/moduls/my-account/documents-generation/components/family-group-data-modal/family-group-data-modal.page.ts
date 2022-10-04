import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ButtonType } from 'src/app/shared/enums/enumerations';
import { ButtonConfiguration } from 'src/app/shared/models/button-configuration';

export interface GroupsModalModel {
  groupName: string;
  valueUsers: any
}

@Component({
  selector: 'app-family-group-data-modal',
  templateUrl: './family-group-data-modal.page.html',
  styleUrls: ['./family-group-data-modal.page.scss'],
})
export class FamilyGroupDataModalPage implements OnInit {

  configurationButton = new ButtonConfiguration();
  groupName: string;
  valueUsers: any

  constructor(
    private bsModalRef: BsModalRef
  ) { }

  ngOnInit(): void {
    this.configurationButton.buttonType = ButtonType.Primary;
    this.configurationButton.text = 'ACEPTAR';
     this.configurationButton.width = "160px";
    this.configurationButton.height = "40px";
  }

  closeModal() {
    console.log("Boton Aceptar")
    this.bsModalRef.hide();
  }

}
