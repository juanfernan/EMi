import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { InformativeModalComponent } from 'src/app/shared/components/informative-modal/informative-modal.component';
import { ButtonType } from 'src/app/shared/enums/enumerations';
import { ButtonConfiguration } from 'src/app/shared/models/button-configuration';
import { UrlDataService } from 'src/app/shared/services/url-data-service';
import { environment } from 'src/environments/environment';
import { SecurityQuestion } from 'src/app/public/models/entities/security-question';
import { SecurityQuestions } from 'src/app/public/models/entities/security-questions';
import { SecurityQuestionRequest } from 'src/app/public/models/requests/security-question-request';
import { SecurityQuestionService } from 'src/app/public/services/security-question.service';

@Component({
  selector: 'app-account-verification',
  templateUrl: './account-verification.page.html',
  styleUrls: ['./account-verification.page.scss'],
})
export class AccountVerificationPage implements OnInit {

  configurationButton = new ButtonConfiguration();
  bsModalRef: BsModalRef;
  securityQuestions: Array<SecurityQuestion>;
  continueText: string;
  currentElement = 0;
  answerCorrectRequired = 3;
  waitingAnswer = true;
  imgRoute: string;

  constructor(
    private securityQuestionService: SecurityQuestionService,
    private translate: TranslateService,
    private bsModalService: BsModalService,
    private urlDataService: UrlDataService,
    private router: Router
  ) {
    this.imgRoute = environment.imagesRoute;
    this.translate.get('PUBLIC.SHARED.continue').subscribe(resp => {
      this.continueText = resp;
    });;
    this.configurationButton.buttonType = ButtonType.Primary;
    this.configurationButton.text = this.continueText;
   }

  ngOnInit() {
    this.loadQuestions();
  }

  loadQuestions() {
    if (this.urlDataService.SecurityQuestions) {
      this.urlDataService.SecurityQuestions.forEach((element: any) => {
        element.Answer = element.Answer.toUpperCase();
      });
      this.securityQuestions = this.urlDataService.SecurityQuestions.filter((q: any) => q.Answer !== "");
    }
    else {
      this.showMissingQuestionsError();
    }
  }

  // loadQuestions() {
  //   let request = new SecurityQuestionRequest();
  //   request.Document = "38944826";
  //   request.DocumentType = "1";
  //   this.securityQuestionService.getSecurityQuestion(request)
  //     .subscribe(data => {
  //       if (data) {
  //         data.SQuestions.forEach(element => {
  //           element.Answer = element.Answer.toUpperCase();
  //         });
  //         this.securityQuestions = data;
  //       }
  //     });
  // }

  answerSelected(event: SecurityQuestion) {
    this.securityQuestions
      .filter((x: any) => x.Question === event.Question)
      .map((y: any) => {
        y.CorrectValidationAnswer = event.CorrectValidationAnswer;
        y.FalseAnswers = event.FalseAnswers;
        y.SelectedAnswer = event.SelectedAnswer;
      });
    this.waitingAnswer = false;
  }

  complete() {
    this.currentElement++;
    if (!this.securityQuestions[this.currentElement]?.SelectedAnswer || this.securityQuestions[this.currentElement]?.SelectedAnswer == "")
      this.waitingAnswer = true;
    if (this.currentElement == this.securityQuestions.length) {
      this.showCorrectOrIncorrectAnswerModal(this.correctAnswer());
    }
  }

  showCorrectOrIncorrectAnswerModal(correct: boolean) {
    const initialState: ModalOptions = {
      initialState: {
        iconHeader: correct ? 'alert-check.svg' : 'alert-circle.svg',
        subTitle: correct ? 'Respuestas correctas' : 'Respuestas incorrectas',
        description: correct ? 'Puede continuar con el proceso de registro' : 'Por favor, póngase en contacto con un asistente de servicio al cliente para continuar con el registro',
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
    if (correct) {
      this.bsModalRef.content.onClose.subscribe(() => {
        this.router.navigate(['/welcome/data-complete']);
      });
    } else {
      this.bsModalRef.content.onClose.subscribe(() => {
        this.router.navigate(['/welcome/ini-sesion']);
      });
    }
  }

  showMissingQuestionsError() {
    const initialState: ModalOptions = {
      initialState: {
        iconHeader: 'alert-circle.svg',
        subTitle: 'Hubo un problema',
        description: 'Por favor, póngase en contacto con un asistente de servicio al cliente para continuar con el registro',
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
    this.bsModalRef.content.onClose.subscribe(() => {
      this.router.navigate(['/welcome']);
    });
  }

  correctAnswer() {
    let i = 0;
    this.securityQuestions.forEach((element: any) => {
      if (element.SelectedAnswer === element.Answer)
        i++;
    });
    if (i >= this.answerCorrectRequired)
      return true;
    else return false;
  }

  goToPreviousQuestion() {
    this.waitingAnswer = false;
    this.currentElement--;
  }

}
