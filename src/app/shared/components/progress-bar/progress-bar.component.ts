import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProgressBarModel } from '../../models/progress-bar-model';
import { ColorService } from '../../services/color.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  @Input() progressBarModel: ProgressBarModel;

  constructor(private colorService: ColorService) {
  }

  ngOnInit(): void {
    this.progressBarModel.outerStrokeColor = this.colorService.getColor(this.progressBarModel.colorType);
  }

}
