import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-service-terms-modal',
  templateUrl: './service-terms-modal.component.html',
  styleUrls: ['./service-terms-modal.component.scss'],
})
export class ServiceTermsModalComponent implements OnInit {
  public onClose: Subject<boolean>;
  imageRoute: string = `${environment.imagesRoute}logo-modal.png`
  texto: string;

  constructor(private modalService: BsModalService, private bsModalRef: BsModalRef) {

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
