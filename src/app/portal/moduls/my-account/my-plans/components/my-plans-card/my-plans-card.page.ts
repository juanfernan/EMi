import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ButtonType } from 'src/app/shared/enums/enumerations';
import { ButtonConfiguration } from 'src/app/shared/models/button-configuration';

@Component({
  selector: 'app-my-plans-card',
  templateUrl: './my-plans-card.page.html',
  styleUrls: ['./my-plans-card.page.scss']
})
export class MyPlansCardPage implements OnInit {
  @Input() planList: any;
  @Input() facturacion: string;
  @Input() matriculaFamilia: string;
  @Input() onShowConsumptions: any;

  configurationButtonDetail = new ButtonConfiguration();
  buttonDetailText: string ;

  constructor(
      private modalService: BsModalService,
      private translate: TranslateService, 
      ) { 
        this.translate.get('PORTAL.MYPLANS.DetailButton').subscribe(resp => {
          this.buttonDetailText = resp;
          });
      }

  ngOnInit(): void {
    this.configurationButtonDetail.buttonType = ButtonType.Primary;
    this.configurationButtonDetail.text = this.buttonDetailText;
    this.configurationButtonDetail.width = '165px'
  }

  getTotal(beneficiario: any): number {
    let total = 0;
    beneficiario.ProductosContratados.forEach((element: any) => {
      total += parseInt(element.TarifaFacturada.Importe);
    });
    return total;
  }

  getNames(beneficiario: any): string {
    let names = '';
    names = beneficiario.Nombre1 + (beneficiario.Nombre2 ? (' ' + beneficiario.Nombre2) : '');
    names += ' ' + (beneficiario.Apellido1 + (beneficiario.Apellido2 ? (' ' + beneficiario.Apellido2) : ''));
    return names;
  }

}