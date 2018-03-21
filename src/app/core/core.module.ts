import { NgModule } from '@angular/core';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { ModelModule } from '../model/model.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StatePipe } from './state.pipe';
import { MessageModule } from '../messages/message.module';
import { RouterModule } from '@angular/router';
import { ProductCountComponent } from './product-count.component';
import { CategoryCountComponent } from './category-count.component';
import { NotFoundComponent } from './not-found.component';
import { UnsavedGuard } from '../unsaved.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [BrowserModule, FormsModule, ModelModule, MessageModule, RouterModule, BrowserAnimationsModule],
  declarations: [
    TableComponent,
    FormComponent,
    StatePipe,
    ProductCountComponent,
    CategoryCountComponent,
    NotFoundComponent],
  exports: [TableComponent, FormComponent, StatePipe],
  providers: [UnsavedGuard]
})
export class CoreModule {
}
