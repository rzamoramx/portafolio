import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // requerido para obtener parametros por url
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  serachK:string = undefined;

  // inyecta dependencias
  constructor(private route:ActivatedRoute,
              public _ps:PortfolioService) 
  {
    // obtiene el parametro de url
    route.params.subscribe(parametro => {
      this.serachK = parametro['searchK'];
      //console.log(this.serachK);
      _ps.searchItem(this.serachK);
    });
  }

}
