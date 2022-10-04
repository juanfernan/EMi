import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { InformativeModalComponent } from 'src/app/shared/components/informative-modal/informative-modal.component';
import { UrlDataService } from 'src/app/shared/services/url-data-service';
import { environment } from 'src/environments/environment';
import { MyPlansConsumptionsModalPage } from './components/my-plans-consumptions-modal/my-plans-consumptions-modal.page';
import { getPlansPayload } from './models/getPlansPayload';
import { MyPlansServices } from './services/my-plans.service.service';

@Component({
  selector: 'app-my-plans',
  templateUrl: './my-plans.page.html',
  styleUrls: ['./my-plans.page.scss'],
})
export class MyPlansPage implements OnInit {

  userData = {}
  userPlans = []
  bsModalRef: BsModalRef;
  isLoading: boolean = false;
  urlShopOnlineWithParametes: string = '';
  user: any = { document: '', documentType: '', failedVenko: '' };
  lstResponsabilities: Array<any> = [];
  lstResponsabilitiesNotMine: Array<any> = [];

  constructor(
    private urlDataService: UrlDataService,
    public modalService: BsModalService, 
    public router: Router,
    public plansService: MyPlansServices,
    ) {
      this.urlDataService.setHeaderNavPortal(['Mi cuenta', 'Mis planes']);
     }

  ngOnInit() {
  //se obtienen los datos del usuario
  this.user.documentType = localStorage.getItem("documentType");
  this.user.document = localStorage.getItem("document");
  if (environment.country === 'co') {
    this.user.failedVenko = localStorage.getItem('failedVenko');
  }
  //se obtienen los planes del usuario
  const payload: getPlansPayload = this.getPlanPayload()
  this.isLoading = true;
  this.plansService.getPlans(payload).subscribe((resp: any) => {
  if (resp.StatusCode == 0) {
    this.isLoading = false;
    this.userPlans = resp.ContractedPlans.Familias
    this.lstResponsabilities = resp.ContractedPlans.Familias.filter((f: any) => { return f.TipoConsulta === 'RP' })
    this.lstResponsabilitiesNotMine = resp.ContractedPlans.Familias.filter((f: any) => { return f.TipoConsulta !== 'RP' })
  } else {
    this.isLoading = false;
    this.bsModalRef = this.generateInformativeModal('Ocurrió un error al obtener tus planes',
      'Hubo un error al cargar tus planes, porfavor intenta de nuevo en unos momentos', true);
    this.bsModalRef.content.onClose.subscribe((accept: boolean) => {
      this.router.navigate(['portal/home'], { replaceUrl: true })
    })
  }
});
  }

  getNames(beneficiario: any): string {
    let names = '';
    names = beneficiario.Nombre1 + (beneficiario.Nombre2 ? (' ' + beneficiario.Nombre2) : '');
    names += ' ' + (beneficiario.Apellido1 + (beneficiario.Apellido2 ? (' ' + beneficiario.Apellido2) : ''));
    return names;
  }

  getPlanPayload<getPlansPayload>() {
    let payload = new getPlansPayload();
    payload.Document = localStorage.getItem("document");
    payload.DocumentType = localStorage.getItem("documentType");
    return payload
  }

  generateNewPlan() {
    const payload: getPlansPayload = this.getPlanPayload();
    this.isLoading = true;
    if (this.lstResponsabilities && this.lstResponsabilities.length > 0) {
      this.plansService.checkDebt(payload).subscribe((response: any) => {
        if (response.HasDebt) {
          this.isLoading = false;
          this.bsModalRef = this.generateComposeInformativeModal('Para poder continuar con el proceso, debes normalizar tu situación de pago.',
            'Si deseas puedes pagar haciendo click en Aceptar, o chatea con uno de nuestros representantes de Servicio al Cliente.', true);
          this.bsModalRef.content.onClose.subscribe((accept: boolean) => {
            accept ? this.router.navigate(['portal/my-account/my-invoices']) : this.router.navigate(['portal/my-account/my-plans']);
          })
        } else {
          this.isLoading = false;
          let vida = this.obtenerVida(this.lstResponsabilities);
          this.abrirEnNuevaPesatana(vida);
          //Continuar con el nuevo plan
        }
      })
    } else {
      let vida = this.obtenerVida(this.lstResponsabilitiesNotMine);
      this.abrirEnNuevaPesatana(vida);
      this.isLoading = false;
    }
  }

  //------ Métodos necesarios para el manejo de modales ---- ///
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
    return this.modalService.show(InformativeModalComponent, initialState);
  }

  generateInformativeModal(subTitle: string, description: string, isError: boolean) {
    const initialState: ModalOptions = {
      initialState: {
        iconHeader: isError ? 'alert-circle.svg' : 'alert-check.svg',
        subTitle: subTitle,
        description: description,
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
    return this.modalService.show(InformativeModalComponent, initialState);
  }

  showConsumptionsModal(consumptions: Array<any>) {
    const initialState: ModalOptions = {
      initialState: {
        consumptions: consumptions
      },
      class: 'modal-dialog-centered modal-rounded',
      id: 'modal-error-no-services',
      backdrop: true,
      ignoreBackdropClick: false
    };
    this.bsModalRef = this.modalService.show(MyPlansConsumptionsModalPage, initialState);
  }

  //------ Métodos necesarios para la redirección al portal ventas ---- ///
  obtenerVida = (lst: any[]) => {
    return lst && lst.length > 0 ? lst[0].MatriculaFamilia : 0
  }

  soyBeneficiario = (familias: any[]) => {
    if (familias && familias.length > 0) {
      for (let familia of familias) {
        for (let beneficiario of familia.Beneficiarios) {
          if (beneficiario.Documento === this.user.document) {
            return true;
          }
        }
      }
    }
    return false;
  }

  abrirEnNuevaPesatana = (vida: string) => {
    // Se contruye el objeto que te llevará a portal ventas
    let parametroPortalVentas: any;
    let ben = this.soyBeneficiario(this.lstResponsabilities)
    ben = ben ? ben : this.soyBeneficiario(this.lstResponsabilitiesNotMine);
    if (environment.country === 'co') {
      parametroPortalVentas = `${vida}${this.user.documentType}${this.user.document}|${vida.length}${Number(ben)}|${this.user.failedVenko}`;
    } else {
      parametroPortalVentas = `${vida}${this.user.documentType}${this.user.document}|${vida.length}${Number(ben)}`;
    }
    this.urlShopOnlineWithParametes = `${environment.shopOnline}ShopOnline/affiliate/${btoa(parametroPortalVentas)}`;
    setTimeout(() => {
      window.open(this.urlShopOnlineWithParametes, '_blank');
    }, 100);
  }

}
