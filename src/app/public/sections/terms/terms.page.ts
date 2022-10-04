import { Component, OnInit, Input } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { environment } from 'src/environments/environment';
import { TermsService } from '../../services/terms.service';

@Component({
    selector: 'app-terms',
    templateUrl: './terms.page.html',
    styleUrls: ['./terms.page.scss']
  })

  export class TermsPage implements OnInit {
    
    imagesRoute: string;
    environment: any;
    imageSource: string;
    tagCode: string;
    tagCodes: string;
    texto: string;
    document: string;
    @Input() parentForm: string;
    isLoading: boolean;
  
    constructor(
        private bsModalRef: BsModalRef, 
        private modalService: BsModalService,
        private termsService: TermsService,
        ) {
          this.imagesRoute = environment.imagesRoute;
      this.isLoading= true;
    }

    ngOnInit(): void {
        this.isLoading = true;
        this.tagCode = this.parentForm === "specialists" ? "TYCE" : "TYCC";
        let roleType = localStorage.getItem("roleType");
        this.tagCodes = roleType != "2" ? "PPC" : "PPE";
        this.imageSource = `${environment.imagesRoute}logo-modal.png`
        this.loadContent(this.document);
    }

    loadContent(tagCode: string){
        this.termsService.getLegalContent(tagCode).subscribe(message => {
          this.isLoading = false;
            if(message.StatusCode === 0) {
              this.texto = message.LegalContent.Content;
            }
        });
    }
  
    closeModal() {
      this.bsModalRef.hide();
    }
  
  }
  