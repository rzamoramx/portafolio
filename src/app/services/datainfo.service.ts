import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DatainfoService {

  dinfo:any = {};
  dok:boolean = false;

  dequipo:any[] = [];
  dquipook = false;
 
  constructor(public http:Http) { 
    this.cargadata();
    this.cargaequipo();
  }

  public cargadata() {
    this.http.get("assets/data/info-data.json").subscribe(data => {
      //console.log(data.json());
      this.dinfo = data.json();
      this.dok = true;
    });
  }

  public cargaequipo() {
    this.http.get("https://miportafolio-88ca3.firebaseio.com/equipo.json").subscribe(data => {
      //console.log(data.json());
      this.dequipo = data.json();
      this.dquipook = true;
    });
  }

}
