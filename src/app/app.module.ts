import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// Importamos rutas
import { app_routing } from "./app.routes";

// servicios
import { DatainfoService } from './services/datainfo.service';
import { PortfolioService } from './services/portfolio.service';

// Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioitemComponent } from './components/portfolioitem/portfolioitem.component';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    PortfolioitemComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, // conexiones http
    app_routing // importante declarar aqui
  ],
  providers: [
    DatainfoService,
    PortfolioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
