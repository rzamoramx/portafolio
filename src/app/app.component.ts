import { Component } from '@angular/core';
// importa servicio
import { DatainfoService } from './services/datainfo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(public _is:DatainfoService) {

  }
 }
