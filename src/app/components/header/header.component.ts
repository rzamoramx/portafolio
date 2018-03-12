import { Component } from '@angular/core';
import { DatainfoService } from '../../services/datainfo.service';
import { Router } from '@angular/router'; // requerido para mandar la busqueda

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  // inyecta dependencias en el constructor
  constructor(public _is:DatainfoService,
              private router:Router) 
  {
    
  }

  // busqueda 
  public searchItem(item:string) 
  {
    //console.log("item: "+item);
    this.router.navigate(['search', item]);
  }

}
