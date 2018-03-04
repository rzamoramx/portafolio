import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DatainfoService {

  dinfo:any = {};
  dok:boolean = false;
 
  constructor(public http:Http) { 
    this.http.get("assets/data/info-data.json").subscribe(data => {
      //console.log(data.json());
      this.dinfo = data.json();
      this.dok = true;
    });
  }

}
