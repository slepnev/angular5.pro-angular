import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './core/table/table.component';
import { FormComponent } from './core/form/form.component';

const routes: Routes = [
  {path: 'form/edit', component: FormComponent},
  {path: 'form/create', component: FormComponent},
  {path: '', component: TableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
