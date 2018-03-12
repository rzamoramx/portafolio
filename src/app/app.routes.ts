// enrutador

import { RouterModule, Routes } from "@angular/router";

// aqui se importan todas las paginas (componentes)
import {
    AboutComponent,
    PortafolioComponent,
    PortfolioitemComponent,
    SearchComponent
} from './components/index.paginas';

// crea las rutas
const app_routes: Routes = [
    { path: 'home', component:PortafolioComponent }, // -> 1
    { path: 'about', component:AboutComponent },
    { path: 'item/:cod', component:PortfolioitemComponent },
    { path: 'search/:key', component:SearchComponent },
    { path: '**', pathMatch: 'full', redirectTo:'home' } // esto indica que si no se a especificado ninguna ruta redirija a raiz '' -> 1
];

// exporta enrutador
export const app_routing = RouterModule.forRoot(app_routes);