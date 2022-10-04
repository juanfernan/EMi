import { AnswerType } from "../enums/answer-type";
import { Answer } from "./answer";

export class SecurityQuestion {
    IdQuestion: number;
    Question: string;
    Answer: string;
    AnswerType: AnswerType;
    SelectedAnswer : string;
    FalseAnswers: Array<Answer>;
    CorrectValidationAnswer: boolean;
}