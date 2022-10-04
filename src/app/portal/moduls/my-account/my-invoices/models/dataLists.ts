
import { BaseResponse } from "src/app/shared/models/response/base-response";

export class DataLists extends BaseResponse {
  DataList: Array<DataList>
}

class DataList {
  Code: string;
  Name: string;
  Description: string;
}
