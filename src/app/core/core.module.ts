import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { ModelModule } from '../model/model.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SHARED_STATE, StateService } from './state.service';
import { Subject } from 'rxjs/Subject';
import { StatePipe } from './state.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule, ModelModule],
  declarations: [TableComponent, FormComponent, StatePipe],
  exports: [ModelModule, TableComponent, FormComponent, StatePipe],
  providers: [{ provide: SHARED_STATE, useValue: new Subject<StateService>() }]
})
export class CoreModule { }
