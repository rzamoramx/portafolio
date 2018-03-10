import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolioitem',
  templateUrl: './portfolioitem.component.html',
  styles: []
})
export class PortfolioitemComponent {

  constructor(private route:ActivatedRoute) {
    route.params.subscribe( parametros => {
      console.log(parametros.id);
    })
  }

}
