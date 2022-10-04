import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { GlobalServiceVariables } from '../../models/globalServiceVariables';
import { NewCoordinationPage } from '../new-coordination/new-coordination.page';
import { PendingCoordinationsPage } from '../pending-coordinations/pending-coordinations.page';

@Component({
  selector: 'app-main-coordinations',
  templateUrl: './main-coordinations.page.html',
  styleUrls: ['./main-coordinations.page.scss'],
})
export class MainCoordinationsPage implements OnInit {

  showNewCoordinations = true;
  showNewCoordinationForm = false;
  translate: TranslateService;
  detailCoordination: any = { detail: { MedicalCenter: { "Latitude": 0, "Longitude": 0 } } };
  newCoordinationConfirm: any = { PendingCoordinations: [{ MedicalCenter: { "Latitude": 0, "Longitude": 0 } }] };
  coordination: any = { SpecialityCode: 0 };
  showDetailPendingCoordination: boolean = true;
  showPendingCoordinationsList: boolean = false;
  reloadCoordinations: boolean = false;
  reloadNewCoordination: boolean = false;

  constructor(
    translate: TranslateService, 
    private route: ActivatedRoute,
    private globalServiceVariables: GlobalServiceVariables
  ) { 
    this.translate = translate;
    translate.setDefaultLang(environment.country);
  }

  @ViewChild(NewCoordinationPage) newCoordinationOneComponent: NewCoordinationPage;
  @ViewChild(PendingCoordinationsPage) pendingCoordinationsComponent: PendingCoordinationsPage;

  ngOnInit() {
    localStorage.setItem("urlItemMenu", null!);
    this.globalServiceVariables.pageTitle = "Solicitar servicio de coordinaciones en centros médicos";
  }

  ngAfterViewInit() {
    let chatData = this.route.snapshot.data;
    // let scriptChatLoaded = localStorage.getItem("scriptChatLoaded");
    // if(scriptChatLoaded === "true"){

  }

   //Para mostrar el detalle de la coordinación.
   showPendingCoordinationDetail(event: any) {
    this.detailCoordination = event;
    this.showPendingCoordinationsList = true;
    this.showDetailPendingCoordination = false;
  }

  //Para retornar a la lista de coordinaciones pendientes desde el detalle.
  returnPendingCoordinations(event: any) {
    this.showPendingCoordinationsList = event.showlist;
    this.showDetailPendingCoordination = event.showdetail;
    this.showNewCoordinations = false;
  }

  //Para retornar a la lista de coordinaciones pendientes desde nueva coordinación.
  returnList() {
    //$("#pendingCoordinationsTab").click();
  }

  NewCoordinations() {
    this.newCoordinationOneComponent.loadData();
    this.newCoordinationOneComponent.VisibleOne();
  }

  ShowNewCoordinations() {
    this.showNewCoordinations = true;
  }

  PendingCoordinations() {
    this.pendingCoordinationsComponent.LoadPending();
  }

  reloadPendingCoordinations(event: any) {
    this.reloadCoordinations = event;
  }

  reloadNewCoordinations(event: any) {
    this.reloadNewCoordination = event;
  }

}