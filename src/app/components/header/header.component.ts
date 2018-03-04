import { Component } from '@angular/core';
import { DatainfoService } from '../../services/datainfo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  constructor(public _is:DatainfoService) {
    
  }

}
