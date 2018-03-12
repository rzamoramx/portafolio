import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// importa servicio para obtener el detalle del portafolio -> item
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-portfolioitem',
  templateUrl: './portfolioitem.component.html',
  styles: []
})
export class PortfolioitemComponent {

  item:any = undefined;
  cod:string = "";

  constructor(private route:ActivatedRoute,
              private _ps:PortfolioService 
              ) {
    // obtiene el id de la url
    route.params.subscribe( parametros => {
      // subcribe la peticion al servicio
      _ps.cargaItem( parametros.cod ).subscribe( res => {
        this.cod = parametros.cod;
        // obtiene el json de la respuesta
        this.item = res.json();
        console.log(this.item);
      });
    })
  }

}
