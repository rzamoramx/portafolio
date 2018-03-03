import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Importamos rutas
import { app_routing } from "./app.routes";

// Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioitemComponent } from './components/portfolioitem/portfolioitem.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    PortfolioitemComponent
  ],
  imports: [
    BrowserModule,
    app_routing // importante declarar aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
