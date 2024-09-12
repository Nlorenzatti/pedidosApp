import { Routes } from '@angular/router';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { RubroComponent } from './pages/rubro/rubro.component';
import { ArticuloComponent } from './pages/articulo/articulo.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { HomeComponent } from './pages/home/home.component';
import { BuscarComponent } from './pages/buscar/buscar.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"carrito",component:CarritoComponent},
    {path:"categoria/:id",component:RubroComponent},
    {path:"articulo/:id",component:ArticuloComponent},
    {path:"perfil",component:PerfilComponent},
    {path:"buscar",component:BuscarComponent}
];
