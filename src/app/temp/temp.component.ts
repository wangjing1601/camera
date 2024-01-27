import { Component, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.scss']
})
export class TempComponent {
  @Input() temp!: TemplateRef<any>
  context = {no: 161}
}
