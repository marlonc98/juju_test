import { Component, Input, OnInit } from '@angular/core';
import { ILocationModel } from 'src/app/domain/models/ilocation-model';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.css']
})
export class ModalInfoComponent implements OnInit {
  @Input() location: ILocationModel|null = null;
  constructor() { }

  ngOnInit(): void {
  }

  close(): void {	
    this.location = null;
  }
  

}
