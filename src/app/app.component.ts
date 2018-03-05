import { Component } from '@angular/core';
// importa servicio
import { DatainfoService } from './services/datainfo.service';
import { PortfolioService } from './services/portfolio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(public _is:DatainfoService, public _ps:PortfolioService) {

  }
 }
