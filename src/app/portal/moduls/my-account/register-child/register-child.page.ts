import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { InformativeModalComponent } from 'src/app/shared/components/informative-modal/informative-modal.component';
import { sendButtonConfigExport } from './configs/send-button-config';
import { RegisterChildService } from './services/register-child.service';

@Component({
  selector: 'app-register-child',
  templateUrl: './register-child.page.html',
  styleUrls: ['./register-child.page.scss'],
})
export class RegisterChildPage implements OnInit {

  idDocument: string = '';
  translate: TranslateService;
  legendChild: string = '';
  fileDocumentC: string = '';
  fileRegisterC: string = '';
  fileDocumentBase: string = '';
  fileRegisterBase: string = '';
  dataChild: any;
  acceptExt: string = ".png, .jpg, .jpeg, .pdf";
  allowExt: string[] = ['jpg', 'jpeg', 'png', 'pdf'];
  extDocument: string = '';
  extRegister: string = '';
  sizeAllow: number = 2;
  loading: boolean = false;
  completedInfo: boolean = false;
  sendButtonConfig = sendButtonConfigExport;
  bsModalRef: BsModalRef;

  constructor(translate: TranslateService,
    private registerChildService: RegisterChildService, 
    private bsModalService: BsModalService
    ) {
    this.translate = translate;
  }

  ngOnInit() {
    this.fileDocumentC = '';
    this.fileRegisterC = '';
    this.translate.get('PORTAL.REGISTER-CHILD.SubitileAtachment').subscribe(message => {
      this.legendChild = message;
    });
  }

  onFileChangedDocument(event: any) {
    const file = event.target.files[0];
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      if (!this.validateFileExt(file.name)) {
        this.erraseDataDocument();
        this.showDialog('Por favor Revisar', 'Formato no permitido', true);
        return;
      } else if (!this.validateSizeFile(file, this.sizeAllow)) {
        this.erraseDataRegisterC();
        this.showDialog('Por favor Revisar', 'Tamaño excede el límite de ' + this.sizeAllow + ' MB', true);
        return;
      } else {
        //Filtro 1, Remover tíldes
        var cleanFileName = file.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        //Filtro 2, Solo numeros, letras, Caracter: -_.
        cleanFileName = cleanFileName.replace(/[^0-9a-zA-Z-_.]+/g, "");
        this.fileDocumentC = cleanFileName;
        this.extDocument = this.fileDocumentC.substring(this.fileDocumentC.lastIndexOf('.') + 1);
        let reader: any = new FileReader();
        reader.readAsBinaryString(file);
        var self = this;
        reader.onload = function () {
          self.fileDocumentBase = btoa(reader.result);
        };
        reader.onerror = function (error: any) {
        };
      }
    }
  }

  private erraseDataDocument() {
    this.fileDocumentBase = '';
    this.fileDocumentC = '';
    this.extDocument = '';
  }

  onFileChangedRegister(event: any) {
    const file = event.target.files[0];
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      if (!this.validateFileExt(file.name)) {
        this.erraseDataRegisterC();
        this.showDialog('Por favor Revisar', 'Formato no permitido', true);
        return;
      } else if (!this.validateSizeFile(file, this.sizeAllow)) {
        this.erraseDataRegisterC();
        this.showDialog('Por favor Revisar', 'Tamaño excede el límite de ' + this.sizeAllow + ' MB', true);
        return;
      } else {
        //Filtro 1, Remover tíldes
        var cleanFileName = file.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        //Filtro 2, Solo numeros, letras, Caracter: -_.
        cleanFileName = cleanFileName.replace(/[^0-9a-zA-Z-_.]+/g, "");
        this.fileRegisterC = cleanFileName;
        this.extRegister = this.fileRegisterC.substring(this.fileRegisterC.lastIndexOf('.') + 1);
        let reader: any = new FileReader();
        reader.readAsBinaryString(file);
        var self = this;
        reader.onload = function () {
          self.fileRegisterBase = btoa(reader.result);
        };
        reader.onerror = function (error: any) {
        };
      }
    }
  }

  private erraseDataRegisterC() {
    this.fileRegisterC = '';
    this.fileRegisterBase = '';
    this.extRegister = '';
  }

  private showDialog(title: any, message: any, imagenStatus: any) {
    this.generateInformativeModal(title, message, imagenStatus, true);
  }

  async getBase64(file: any, assingVar: any) { }

  /**
   * @se Valida la extensión del archivo
   * @param name
   */
  private validateFileExt(name: String) {
    var ext = name.substring(name.lastIndexOf('.') + 1);
    //Halla si algun elemento de las extensiones permitidas cumple con la extensión del archivo.
    var even = function (element: any) {
      return element == ext.toLowerCase();
    };
    if (this.allowExt.some(even)) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * @see Se valida el tamaño del archivo
   * @param file
   * @param sizeAllow
   */
  private validateSizeFile(file: any, sizeAllow: any) {
    var fileSize = file.size / 1024 / 1024; // in MB
    if (fileSize > sizeAllow) {
      return false;
    } else {
      return true;
    }
  }

  getChild(dataChildComing: any) {
    this.dataChild = dataChildComing;
  }

  send() {
    if(!this.fileDocumentC || !this.fileRegisterC || !this.dataChild) {
      return
    } else {
      this.validateBeforeSend();
      /* TODO incluir nuevo modal del loader
      this.dialogService.addDialog(ModalLoadComponent, {
      }, { closeByClickingOutside: false }); */

      let fullNameResponsible = localStorage.getItem("NameOne")
        + (localStorage.getItem("NameTwo") === "" ? "" : (" " + localStorage.getItem("NameTwo")))
        + (localStorage.getItem("LastNameOne") === "" ? "" : (" " + localStorage.getItem("LastNameOne")))
        + (localStorage.getItem("LastNameTwo") === "" ? "" : (" " + localStorage.getItem("LastNameTwo")));
  
      let params = {
        "StringMinorDocument": this.fileDocumentBase,
        "StringCivilRegistration": this.fileRegisterBase,
        "DocumentType": localStorage.getItem("documentType"),
        "Document": localStorage.getItem("document"),
        "MinorDocumentType": this.dataChild.DocumentType,
        "MinorDocument": this.dataChild.Document,
        "MinorFullName": this.dataChild.FullNames,
        "ResponsibleFullName": fullNameResponsible,
        "ExtentionDocument": this.extDocument.toUpperCase(),
        "ExtentionCivilRegistration": this.extRegister.toUpperCase(),
        "MailResponsible": localStorage.getItem("userName")
      }
      this.loading = true;
  
      this.registerChildService.sendDocuments(params)
        .subscribe(
          (result: any) => {
            this.loading = false;
            this.resetForm();
            if (result.StatusCode == 0) {
              this.showDialog('Tu solicitud fue recibida', 'Tu solicitud ha sido registrada exitosamente bajo el radicado N°:' + result.NumFnc + '. En un plazo máximo de dos (2) días hábiles daremos respuesta a tu requerimiento a través del correo ' + localStorage.getItem("userName"), false);
              this.erraseDataDocument();
              this.erraseDataRegisterC();
            } else {
              this.loading = false;
              this.showDialog('Se presentó el siguiente problema', result.Message, true);
            }
          },
          (error: any) => {
            this.loading = false;
            this.showDialog('Error en el sistema', 'Por favor intentalo más tarde', true);
          });
    }
    
  }

  resetForm() {
    /* Nueva logica para resetear formulario
    let documentC = $('#documentC');
    documentC.wrap('<form>').closest('form').get(0).reset();
    documentC.unwrap();
    let registerC = $('#registerC');
    registerC.wrap('<form>').closest('form').get(0).reset();
    registerC.unwrap();
    */

    this.fileDocumentC = "";
    this.fileRegisterC = "";
  }

  private validateBeforeSend() {
    if (this.validateDataIsSet(this.fileDocumentBase)
      && this.validateDataIsSet(this.fileRegisterBase)
      && typeof this.dataChild !== 'undefined') {
      this.completedInfo = true;
    } else {
      this.completedInfo = false;
    }
  }

  private validateDataIsSet(data: any) {
    return (data.length != 0 || data.trim());
  }

  generateInformativeModal(subTitle: string, description: string, isError: boolean, onlyButtonConfirm: boolean = true) {
    const initialState: ModalOptions = {
      initialState: {
        iconHeader: isError ? 'alert-circle.svg' : 'alert-check.svg',
        subTitle: subTitle,
        description: description,
        onlyButtonConfirm: onlyButtonConfirm,
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


}
