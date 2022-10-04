import { BaseResponse } from "src/app/shared/models/response/base-response";
import { ListInvoices } from "./list-invoices";

export class Invoice extends BaseResponse {
    Document: string;
    DocumentType: string;
    ListInvoices: Array<ListInvoices>
    Name: string;

}