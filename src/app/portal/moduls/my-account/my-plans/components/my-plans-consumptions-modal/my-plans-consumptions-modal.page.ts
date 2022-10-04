import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface ConsumptionsModel {
  consumptions: Array<any>;
  onClose: Subject<boolean>;
}

@Component({
  selector: 'app-my-plans-consumptions-modal',
  templateUrl: './my-plans-consumptions-modal.page.html',
  styleUrls: ['./my-plans-consumptions-modal.page.scss'],
})
export class MyPlansConsumptionsModalPage implements OnInit {
  
  consumptions: Array<any>;
  public onClose: Subject<boolean>;
  imgRoute: string
  environment: any;

  constructor(
    private modalService: BsModalService, 
    private bsModalRef: BsModalRef
    ) {
      this.environment = environment;
      this.imgRoute = environment.imagesRoute;
  }

  ngOnInit(): void {
    this.onClose = new Subject();
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
