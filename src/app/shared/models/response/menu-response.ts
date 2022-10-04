import { SidenavItem } from "../side-nav-item";
import { BaseResponse } from "./base-response";

export class MenuResponse extends BaseResponse {
    Menus: Array<SidenavItem>;
}