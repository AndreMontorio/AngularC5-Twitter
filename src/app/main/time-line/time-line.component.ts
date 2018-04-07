import { Component, OnInit, EventEmitter, ViewChild, Output, Input } from '@angular/core';
import { AppService } from '../../app.service';


@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css']
})
export class TimeLineComponent {

  @Input('data') dataSource: any = {};
  @Output() onSaveItem: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('txtTexto') txtTexto;        //DOM manipulation

  constructor(private serviceHelper: AppService) {
    
  }

  ngOnInit() {
    this.initDataSource();
  }

  initDataSource() {
    this.dataSource = { };
  }

  onSubmit() {
    this.onSaveItem.emit(this.dataSource);
    this.initDataSource();
  }

}
