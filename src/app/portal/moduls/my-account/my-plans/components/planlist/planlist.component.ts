import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-planlist',
  templateUrl: './planlist.component.html',
  styleUrls: ['./planlist.component.scss'],
})
export class PlanlistComponent implements OnInit {
  @Input() planList: any;
  @Input() facturacion: any;
  @Input() matriculaFamilia: any;
  @Input() onShowConsumptions: any;
  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit() { }

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
