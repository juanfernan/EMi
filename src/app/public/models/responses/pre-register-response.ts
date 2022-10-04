import { BaseResponse } from "src/app/shared/models/response/base-response";
import { UserName } from "../entities/user-name";

export class PreRegisterResponse extends BaseResponse{
    UserNames: UserName;
}