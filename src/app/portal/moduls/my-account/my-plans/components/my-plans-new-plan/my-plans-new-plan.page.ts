import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-plans-new-plan',
  templateUrl: './my-plans-new-plan.page.html',
  styleUrls: ['./my-plans-new-plan.page.scss']
})
export class MyPlansNewPlanPage implements OnInit {
  @Input() generateNewPlan: any;
  @Input() getPlanPayload: any;
  @Input() isLoading: any;
  @Input() bsModalRef: any;
  @Input() plansService: any;
  @Input() generateComposeInformativeModal: any;
  @Input() modalService: any;
  @Input() router: any;
  @Input() obtenerVida: any;
  @Input() abrirEnNuevaPesatana: any;
  @Input() lstResponsabilities: Array<any> = []
  @Input() lstResponsabilitiesNotMine: Array<any> = []
  @Input() user: any = { document: '', documentType: '', failedVenko: '' }

  constructor() { }

  ngOnInit(): void {
  }

}
