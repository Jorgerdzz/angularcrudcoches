import { Routes } from '@angular/router';
import { HomeComponent } from './components/home.component/home.component';
import { CochesComponent } from './components/coches.component/coches.component';
import { CreateCocheComponent } from './components/create.coche.component/create.coche.component';
import { CochesMarcaComponent } from './components/coches-marca-component/coches-marca-component';

export const routes: Routes = [
    {path: "", component:HomeComponent},
    {path: "coches", component:CochesComponent},
    {path: "create", component: CreateCocheComponent},
    {path: "coches/:marca", component: CochesMarcaComponent}
];
