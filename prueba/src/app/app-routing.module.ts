import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarComponent } from './consultar/consultar.component'
import { DialogComponent } from './dialog/dialog.component'

const routes: Routes = [
  {path: '', component: ConsultarComponent},
  {path: 'pokemon/:id', component: DialogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
