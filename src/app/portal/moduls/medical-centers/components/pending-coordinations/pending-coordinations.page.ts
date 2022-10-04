import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { PendingCoordinationsService } from '../../services/pending-coordinations.service';

@Component({
  selector: 'app-pending-coordinations',
  templateUrl: './pending-coordinations.page.html',
  styleUrls: ['./pending-coordinations.page.scss'],
})
export class PendingCoordinationsPage implements OnInit {

  translate: TranslateService;
  coordinationsPending: any;
  registerId: any;
  imgRoute: string;
  environment: any;
  @Output() sendCoordinationDetail = new EventEmitter();

  constructor(
    private pendingCoordinationsService: PendingCoordinationsService, 
    translate: TranslateService
  ) {
    this.translate = translate;
    this.environment = environment;
    this.imgRoute = environment.imagesRoute;
    translate.setDefaultLang(environment.country);
   }

   ngOnInit() {
    this.LoadPending();
  }

  LoadPending() {/* TODO
    this.dialogService.addDialog(ModalLoadComponent, {
    }, { closeByClickingOutside: false });*/
    
    this.registerId = localStorage.getItem("registerId");
    this.getPendingCoordinations(this.registerId);
  }

  getPendingCoordinations(id: any) {
    this.pendingCoordinationsService.getPendingCoordinationsList(id)
      .subscribe((result: any) => {
        /* coordinations mock
        const testCoordinations = [{
          Names: "Juan Perez",
          SpecialityName: "Cardiología",
          Date: "01/01/2019",
          Price: "99999",
          AgendaName: "Consulta",
          MedicalCenter: {
            ClinicName: "Clinica de la salud",
            Address: "Calle falsa 123",
            Latitude: "-34.914343",
            Longitude: "-56.155703"
          },
        }, {
          Names: "Juan Perez",
          SpecialityName: "Cardiología",
          Date: "01/01/2019",
          Price: "99999",
          AgendaName: "Consulta",
          MedicalCenter: {
            ClinicName: "Clinica de la salud",
            Address: "Calle falsa 123",
            Latitude: "-34.914343",
            Longitude: "-56.155703"
          },
        }, {
          Names: "Juan Perez",
          SpecialityName: "Cardiología",
          Date: "01/01/2019",
          Price: "99999",
          AgendaName: "Consulta",
          MedicalCenter: {
            ClinicName: "Clinica de la salud",
            Address: "Calle falsa 123",
            Latitude: "-34.914343",
            Longitude: "-56.155703"
          },
        },]
        this.coordinationsPending = testCoordinations;*/
        this.coordinationsPending = result.PendingCoordinations;
      },
        (error: any) => this.ErrorLoad(error));
  }

  sendDetail(event: any, coordination: any) {
    this.sendCoordinationDetail.emit({ detail: coordination });
  }

  ErrorLoad(error: any) {
    // TODO mostrar el error en un modal
    console.log(error);
  }

}
