import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { InformativeModalComponent } from 'src/app/shared/components/informative-modal/informative-modal.component';
import { UrlDataService } from 'src/app/shared/services/url-data-service';
import { FaqsService } from './services/faqs.service';
import { String, StringBuilder } from 'typescript-string-operations';
import { FilterPipe } from './Pipe/searchFilter';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.page.html',
  styleUrls: ['./faqs.page.scss'],
})
export class FaqsPage implements OnInit {

  translate: TranslateService;
  categoriesFaqs: any;
  search: any;
  searchFaqs: any;
  viewSearch: any = false;
  showdetail: boolean = false;
  //detail
  faqs: any;
  category: any;
  subcategory: any;
  bsModalRef: BsModalRef;

  constructor(
    private faqsService: FaqsService,
    private router: Router,
    private route: ActivatedRoute,
    private urlDataService: UrlDataService,
    private bsModalService: BsModalService,
    translate: TranslateService,
  ) {
    this.translate = translate;
    this.urlDataService.setHeaderNavPortal(['Servicios al Cliente', 'Preguntas Frecuentes']);
   }

  ngOnInit() {
    this.getCategoriesFaqs();
    this.GetAllFaqs();
  }

  subcategoryId(id: any) {
    //this.router.navigate(['/customerservice/faqsdetail', 'subcategory', id]);
    this.showdetail = true;
    this.GetFaqs('subcategory', id);
  }

  faq(id: any) {
    //  this.router.navigate(['/customerservice/faqsdetail', 'faq', id]);
    this.showdetail = true;
    this.GetFaqs('faq', id);
  }

  GetFaqs(type: any, id: any) {
    if (type == "subcategory") {
      this.faqsService
        .getFaqsBySubcategory(id)
        .subscribe(value => {
          this.faqs = value.Faqs;
          this.category = this.faqs[0].CategoryName;
          this.subcategory = this.faqs[0].SubCategoryName;
        },
        error => {
          this.showErrorNotificationModal(error.message);
        });
    } else  
    if (type == "faq") {
      this.faqsService
      .getFaqsById(id)
      .subscribe(value => {
        this.faqs = value.Faqs;
        this.category = this.faqs[0].CategoryName;
        this.subcategory = this.faqs[0].SubCategoryName;
      },
      error => {
        this.showErrorNotificationModal(error.message);
      });
    }
  }

  backList() {
    this.showdetail = false;
    this.getCategoriesFaqs();
    this.GetAllFaqs();
  }

  inputSearchFaqs() {
    if (String.IsNullOrWhiteSpace(this.search)) {
      this.HideSearchFaqs();
    } else {
      this.GetSearchFaqs();
    }
  }

  HideSearchFaqs() {
    this.search = '';
    this.viewSearch = false;
  }

  GetSearchFaqs() {
    this.viewSearch = true;
  }

  GetAllFaqs() {
    this.faqsService
      .GetAllFaqs()
      .subscribe(value => {
        this.searchFaqs = value.FaqsResponse;
      },
        error => {
          // TODO falta informar el error
        });
  }

  getCategoriesFaqs() {
    this.faqsService
      .CategoriesFaqs()
      .subscribe(value => {
        this.categoriesFaqs = value.CategoriesFaqs;
      },
        error => {
          this.showErrorNotificationModal(error.message);
        });
  }

  generateInformativeModal(subTitle: string, description: string, isError: boolean, twoButtons: boolean) {
    const initialState: ModalOptions = {
      initialState: {
        iconHeader: isError ? 'alert-circle.svg' : 'alert-check.svg',
        subTitle: subTitle,
        description: description,
        onlyButtonConfirm: !twoButtons,
        textButton: 'Aceptar',
        textButton1: 'Cancelar',
        textButton2: 'Aceptar',
        visibleButtonClose: false,
      },
      class: 'modal-dialog-centered modal-rounded',
      id: 'modal-error-no-services',
      backdrop: true,
      ignoreBackdropClick: true
    };
    return this.bsModalService.show(InformativeModalComponent, initialState);
  }

  showErrorNotificationModal(msg: string) {
    const initialState: ModalOptions = {
      initialState: {
        iconHeader: 'alert-circle.svg',
        subTitle: 'Hubo un problema',
        description: msg,
        onlyButtonConfirm: true,
        textButton: 'Aceptar',
        textButton1: '',
        textButton2: '',
        visibleButtonClose: false,
      },
      class: 'modal-dialog-centered modal-rounded',
      id: 1
    }
    this.bsModalRef = this.bsModalService.show(InformativeModalComponent, initialState);
  }


}
