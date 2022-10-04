import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { ButtonType } from 'src/app/shared/enums/enumerations';
import { ButtonConfiguration } from 'src/app/shared/models/button-configuration';
import { environment } from 'src/environments/environment';

export class ListFileModel {
  NameFile: string;
  Link: string;
}
export interface FileListModel {
  listFiles: ListFileModel[];
}

@Component({
  selector: 'app-file-list-modal',
  templateUrl: './file-list-modal.page.html',
  styleUrls: ['./file-list-modal.page.scss']
})

export class FileListModalPage {

  listFiles: ListFileModel[];
  imgRoute: string
  environment: any;
  onClose = new Subject<boolean>();

  constructor(
      private router: Router, 
      private modalService: BsModalService, 
      private bsModalRef: BsModalRef
      ) {
        this.environment = environment;
        this.imgRoute = environment.imagesRoute;
  }

  ngOnInit(): void {

  }

  closeModal() {
    this.bsModalRef.hide();
  }

  openFile(listFileModel: ListFileModel) {
    try {
      window.open(listFileModel.Link);
    }
    catch (e) {
      this.onClose.next(true);
    }
  }

}
