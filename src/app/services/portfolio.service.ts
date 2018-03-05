import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PortfolioService {

  portfolio:any[] = [];
  cargandoPortfolio:boolean = false;

  constructor(private http:Http ) {
    this.cargaPortfolio();
  }

  private cargaPortfolio() {
    this.cargandoPortfolio = true;
    if (this.portfolio.length===0) {
      this.http.get("https://miportafolio-88ca3.firebaseio.com/portfolioidx.json").subscribe(res => {
        console.log(res.json());
        this.cargandoPortfolio = false;
      });
    }
  }
}
