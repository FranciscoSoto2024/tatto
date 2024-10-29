import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreNosotrosComponent } from './pages/sobre-nosotros/sobre-nosotros.component';

const routes: Routes = [
  { path: 'sobre-nosotros', component: SobreNosotrosComponent },
  // otras rutas
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SobreNosotrosRoutingModule { }
