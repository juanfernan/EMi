import { AgmMap } from '@agm/core';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { InformativeModalComponent } from 'src/app/shared/components/informative-modal/informative-modal.component';
import { environment } from 'src/environments/environment';
import { PortalCommonService } from '../../../service-solicitud/services/portal-common.service';
import { DetailsPendingCoordinationsService } from '../../services/details-pending-coordinations.service';

@Component({
  selector: 'app-details-pending-coordinations',
  templateUrl: './details-pending-coordinations.page.html',
  styleUrls: ['./details-pending-coordinations.page.scss']
})
export class DetailsPendingCoordinationsPage implements OnInit {

  @ViewChild(AgmMap)
  public agmMap: AgmMap
  
  translate: TranslateService;
  latitude: number;
  longitude: number;
  confirmResult: boolean | null = null;
  bsModalRef: BsModalRef;
  @Input() objDetail: any;
  @Output() returnToList: any = new EventEmitter();

  constructor(
    private commonService: PortalCommonService, 
    translate: TranslateService,
    private detailsPendingCoordinationService: DetailsPendingCoordinationsService, 
    private bsModalService: BsModalService
  ) {
    this.translate = translate;
    translate.setDefaultLang(environment.country);
  }

  ngOnInit() {

  }

  ngOnChanges(changes: any) {
    this.latitude = Number(this.objDetail.detail.MedicalCenter.Latitude);
    this.longitude = Number(this.objDetail.detail.MedicalCenter.Longitude);
  }

  call() {
    const initialState: ModalOptions = {
      initialState: {
        iconHeader: 'alert-check.svg',
        subTitle: 'Línea de atención',
        description: 'Comunícate a la línea de atención del centro de coordinación de centros médicos 24873333',
        onlyButtonConfirm: true,
        textButton: 'Aceptar',
        textButton1: '',
        textButton2: '',
        visibleButtonClose: false,
      },
      class: 'modal-dialog-centered modal-rounded',
      id: 'modal-error-no-services',
      backdrop: true,
      ignoreBackdropClick: true
    };
    this.bsModalRef = this.bsModalService.show(InformativeModalComponent, initialState);
  }

  returnList(event: any) {
    this.returnToList.emit({ showlist: false, showdetail: true });
  }

  cancelCoordination() {
    this.bsModalRef = this.generateComposeInformativeModal('Confirmación',
      '¿Estás seguro que deseas cancelar la coordinación?', true);
    this.bsModalRef.content.onClose.subscribe((isConfirmed: boolean) => {
      this.confirmResult = isConfirmed;
      if (this.confirmResult === true) {
        this.detailsPendingCoordinationService
          .cancelCoordination(localStorage.getItem("registerId"),
            this.objDetail.detail.AgendaType,
            this.objDetail.detail.RDACode,
            this.objDetail.detail.MedicalCenter.ClinicCode,
            this.objDetail.detail.SpecialityCode,
            this.objDetail.detail.YearMonthDay,
            this.objDetail.detail.Time,
            this.objDetail.detail.Document,
            localStorage.getItem("CellPhone"),
            localStorage.getItem("userName"))
          .subscribe((result: any) => {
            if (result.StatusCode === 0) {
              const initialState: ModalOptions = {
                initialState: {
                  iconHeader: 'alert-check.svg',
                  subTitle: result.Title,
                  description: result.Message,
                  onlyButtonConfirm: true,
                  textButton: 'Aceptar',
                  textButton1: '',
                  textButton2: '',
                  visibleButtonClose: false,
                },
                class: 'modal-dialog-centered modal-rounded',
                id: 'modal-error-no-services',
                backdrop: true,
                ignoreBackdropClick: true
              };
              this.bsModalRef = this.bsModalService.show(InformativeModalComponent, initialState);
            } else {
              const initialState: ModalOptions = {
                initialState: {
                  iconHeader: 'alert-circle.svg',
                  subTitle: result.Title,
                  description: result.Message,
                  onlyButtonConfirm: true,
                  textButton: 'Aceptar',
                  textButton1: '',
                  textButton2: '',
                  visibleButtonClose: false,
                },
                class: 'modal-dialog-centered modal-rounded',
                id: 'modal-error-no-services',
                backdrop: true,
                ignoreBackdropClick: true
              };
              this.bsModalRef = this.bsModalService.show(InformativeModalComponent, initialState);
            }
          },
            error => this.ReponseError(error));
      } else {
      }
    })
  }

  ReponseError(error: any) {
    //this.dialogService.removeAll();
  }

  generateComposeInformativeModal(subTitle: string, description: string, isError: boolean) {
    const initialState: ModalOptions = {
      initialState: {
        iconHeader: isError ? 'alert-circle.svg' : 'alert-check.svg',
        subTitle: subTitle,
        description: description,
        onlyButtonConfirm: false,
        textButton: '',
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

}
