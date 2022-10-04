import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ButtonType } from 'src/app/shared/enums/enumerations';
import { ButtonConfiguration } from 'src/app/shared/models/button-configuration';
import { environment } from 'src/environments/environment';
import { DataLists } from '../../models/dataLists';
import { DateEventValues } from '../../models/date-event-values';
import { ListInvoicesFactures } from '../../models/list-invoices-factures';
import { MyInvoicesService } from '../../services/my-invoices.service';

@Component({
  selector: 'app-invoices-filter',
  templateUrl: './invoices-filter.page.html',
  styleUrls: ['./invoices-filter.page.scss'],
})
export class InvoicesFilterPage implements OnInit {
  
  @Input() listStatus: DataLists;
  @Input() unpaid: string;
  @Output() newItemEvent = new EventEmitter<DateEventValues>();
  isLoading: boolean = false;
  form: FormGroup;
  configurationButton = new ButtonConfiguration();
  _environment: any;

  constructor(
    private fb: FormBuilder,
    public modalService: BsModalService,
    private myFacturesService: MyInvoicesService
  ) {
    this._environment = environment;
    this.configurationButton.buttonType = ButtonType.Primary;
    this.configurationButton.text = "Buscar";
    
    this.form = this.fb.group({
      from: [{
        value: '',
      }],
      until: [{
        value: '',
      }],
      status: [{ value: '' }],
    })
  }

  ngOnInit(): void {

  }

  obtainDate(d: any) {
    const date = new Date(d);
    if (date && (d.value != '')) {
      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }
    return "--/--/----";
  }

  parse(unpaid: string) {
    return parseInt(unpaid);
  }

  onSubmit() {
    this.isLoading = true;
    const payload: ListInvoicesFactures = new ListInvoicesFactures();
    payload.DocumentType = localStorage.getItem("documentType");
    payload.Document = localStorage.getItem("document");
    payload.IdStatusInvoice = this.form.controls.status.value === "1" ? "1" : "2";
    payload.StartDate = this.getFormatedDate(this.form.controls.from.value);
    payload.Enddate = this.getFormatedDate(this.form.controls.until.value);
    this.myFacturesService.getListInvoices(payload).subscribe((response) => {
      if (response.InvoicesResponse.ListInvoices) {
        this.myFacturesService.setListInvoices(response.InvoicesResponse.ListInvoices);
      }
      this.isLoading = false;
    });
    this.form.reset();
  }

  setDateFrom(val) {
    this.form.controls.from.setValue(val);
  }

  setDateUntil(val) {
    this.form.controls.until.setValue(val);
  }

  getFormatedDate(d: any) {
    const date = new Date(d);
    if (date) {
      return `${date.getFullYear()}${this.addZeroToOneDigitNumbers(date.getMonth() + 1)}${this.addZeroToOneDigitNumbers(date.getDate())}`;
    }
    return "";
  }

  addZeroToOneDigitNumbers(number: number) {
    if (number < 10) {
      return "0" + number;
    }
    return number;
  }
}
