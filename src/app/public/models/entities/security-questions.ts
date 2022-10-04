import { BaseResponse } from "src/app/shared/models/response/base-response";
import { SecurityQuestion } from "./security-question";

export class SecurityQuestions extends BaseResponse {
  SQuestions: Array<SecurityQuestion>;
}
