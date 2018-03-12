import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PortfolioService {

  portfolios:any[] = [];
  portfoliosfiltrados:any[] = [];
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
      // Debido a que la carga del portafolio es asincrona
      // Creamos una promesa
      let promesa = new Promise( (resolve, reject) => {
        this.http.get("https://miportafolio-88ca3.firebaseio.com/portfolioidx.json").subscribe(res => {
          //console.log( res.json() );
          //setTimeout(() => {
            this.cargandoPortfolio = false;
            this.portfolios = res.json();
            resolve(); // en cuanto termina invoca el callback
          //}, 1000);
        });
      });  
      
      return promesa; // regresa una promesa
    }
  }


  /**
   * Busca un item del portafolio
   * @param key termino de busqueda
   */
  public searchItem(key:string)
  {
    console.log("Buscando...");
  
    // Si no tenemos el portafolios cargado
    if (this.portfolios.length===0) {
      // Llamamos la funcion de carga
      this.cargaPortfolio().then(() => {
        // nos enteramos de que concluyo la carga del portafolios
        this.filtrarItem(key); // hasta entonces hacemos el filtrado
      });
    }
    // ya lo tenemos
    else {
      this.filtrarItem(key);
    }    
  }

  private filtrarItem(key:string)
  {
    this.portfoliosfiltrados = []; // vacia para no acumular
    key = key.toLowerCase();

    // Itera el array de portafolios
    this.portfolios.forEach( item => {
      // Si condincide con la categoria o el titulo
      if ( item.categoria.indexOf(key) >= 0 || item.titulo.toLowerCase().indexOf(key) >= 0 ) {
        this.portfoliosfiltrados.push(item); // lo agregamos
      }
      //console.log(this.portfoliosfiltrados);
    });
  }

}
