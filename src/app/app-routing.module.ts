import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './core/table/table.component';
import { FormComponent } from './core/form/form.component';
import { NotFoundComponent } from './core/not-found.component';
import { CategoryCountComponent } from './core/category-count.component';
import { ProductCountComponent } from './core/product-count.component';
import { ModelResolver } from './model/model.resolver';

const childRoutes: Routes = [
  {path: 'products', component: ProductCountComponent},
  {path: 'categories', component: CategoryCountComponent}
];

const routes: Routes = [
  {path: 'form/edit/:id', component: FormComponent},
  {path: 'form/create', component: FormComponent},
  {path: 'table', component: TableComponent, children: childRoutes, resolve: { model: ModelResolver }},
  {path: 'table/:category', component: TableComponent, children: childRoutes, resolve: { model: ModelResolver }},
  {path: '', redirectTo: 'table', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
