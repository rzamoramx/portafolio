import { Component } from '@angular/core';
import { DatainfoService } from '../../services/datainfo.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent {

  constructor(public _is:DatainfoService) { 

  }

}
