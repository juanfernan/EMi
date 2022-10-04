import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { ButtonType } from 'src/app/shared/enums/enumerations';
import { ButtonConfiguration } from 'src/app/shared/models/button-configuration';
import { environment } from 'src/environments/environment';

export interface InformativeMapModel {
  latitud:any;
  longitud:any;
  textMark:string;
  subTitle: any;
  description: any;
  textButton: string;
  onClose: Subject<boolean>;
}

@Component({
  selector: 'app-agenda-map-modal',
  templateUrl: './agenda-map-modal.page.html',
  styleUrls: ['./agenda-map-modal.page.scss'],
})
export class AgendaMapModalPage implements OnInit {

  constructor(
    private router: Router, 
    private modalService: BsModalService,
    private bsModalRef: BsModalRef
    ) {

  }

    latitud:number;
    longitud:number;
    
    configurationButton = new ButtonConfiguration();
    configurationButton1 = new ButtonConfiguration();
    configurationButton2 = new ButtonConfiguration();
    public onClose: Subject<boolean>;
  
    imagesRoute: string = environment.imagesRoute;
    subTitle: string;
    description: string;
  
    textButton: string;
    textMark:string;
    
    ngOnInit(): void {
      this.onClose = new Subject();
      this.configurationButton.buttonType = ButtonType.Primary;
      this.configurationButton.text = this.textButton;
    }
  
    closeModal() {
      this.bsModalRef.hide();
    }
  
    confirm() {
      this.onClose.next(true);
      this.onClose.complete();
      this.bsModalRef.hide();
    }
  
    cancel() {
      this.onClose.next(false);
      this.onClose.complete();
      this.bsModalRef.hide();
    }

}
