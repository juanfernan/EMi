import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RequestPhoneNumbers } from '../../models/request-phone-numbers';

@Component({
  selector: 'app-modal-phones-center',
  templateUrl: './modal-phones-center.component.html',
  styleUrls: ['./modal-phones-center.component.scss'],
})
export class ModalPhonesCenterComponent implements OnInit {
  
  listPhoneNumbers: any;
  imgRoute: string;
  environment: any;
  requestPhoneNumber: RequestPhoneNumbers;
  public onClose: Subject<boolean>;

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
