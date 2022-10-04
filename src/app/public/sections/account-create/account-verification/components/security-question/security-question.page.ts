import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SecurityQuestion } from 'src/app/public/models/entities/security-question';
import { FakeAnswerService } from 'src/app/public/services/fake-answer.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-security-question',
  templateUrl: './security-question.page.html',
  styleUrls: ['./security-question.page.scss'],
})
export class SecurityQuestionPage implements OnInit {

  @Input() securityQuestion : SecurityQuestion;
  @Output() onClick = new EventEmitter<SecurityQuestion>();
  securityQuestions: Array<SecurityQuestion>;
  imgRoute: string;
  
  constructor(
    private fakeAnswerService: FakeAnswerService
  ) {
    this.imgRoute = environment.imagesRoute;
   }

  ngOnInit() {
    this.generateAnswer();
  }

  private generateAnswer() {
    this.securityQuestions = new Array<SecurityQuestion>();
      if (this.securityQuestion.SelectedAnswer === "" || !this.securityQuestion.SelectedAnswer) {
        this.securityQuestion.FalseAnswers = this.fakeAnswerService.GetAnswerById(4, this.securityQuestion.AnswerType, this.securityQuestion.Answer);
        this.securityQuestion.SelectedAnswer = "";
        this.securityQuestion.CorrectValidationAnswer = false;
      }
  }
  
  onClickAnswer() {
    this.onClick.emit(this.securityQuestion);
  }

}
