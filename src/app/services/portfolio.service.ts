import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PortfolioService {

  portfolios:any[] = [];
  cargandoPortfolio:boolean = false;

  constructor(private http:Http ) {
    this.cargaPortfolio();
  }

  /** 
   * Carga detalle de item, portafolio seleccionado
   */
  public cargaItem(cod:string)
  {
    return this.http.get(`https://miportafolio-88ca3.firebaseio.com/portfolio/${ cod }.json`);
  }

  /**
   * Lista todos los portafolios, desde firebase
   */
  public cargaPortfolio() 
  {
    this.cargandoPortfolio = true;

    if (this.portfolios.length===0) {
      this.http.get("https://miportafolio-88ca3.firebaseio.com/portfolioidx.json").subscribe(res => {
        console.log( res.json() );
        setTimeout(() => {
          this.cargandoPortfolio = false;
          this.portfolios = res.json();
        }, 1000);
      });
    }
  }
}
