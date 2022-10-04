import { BaseResponse } from "src/app/shared/models/response/base-response";
import { PhoneModel } from "./phone-model";

export class ListPhoneModel extends BaseResponse {
    UPhoneses: Array<PhoneModel>
}
