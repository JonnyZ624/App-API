import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './pages/home/home.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { EditarProductoComponent } from './pages/editar-producto/editar-producto.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"personal",component:PersonalComponent},
    {path:"producto",component:ProductoComponent},
    {path:"editarProductos/:idProducto",component:EditarProductoComponent},

    {path:"**",redirectTo:"",pathMatch:'full' }
];
