import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticDataService } from './static-data.service';
import { RepositoryService } from './repository.service';
import { HttpClientModule } from '@angular/common/http';
import { REST_URL } from './rest-data.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [StaticDataService, RepositoryService, {provide: REST_URL, useValue: 'http://localhost:3500/products'}]
})
export class ModelModule {
}
