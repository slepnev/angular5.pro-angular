import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoryService } from './repository.service';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { REST_URL, RestDataService } from './rest-data.service';
import { ModelResolver } from './model.resolver';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  declarations: [],
  providers: [
    ModelResolver,
    RestDataService,
    RepositoryService,
    {provide: REST_URL, useValue: `http://${location.hostname}:3500/products`}
  ]
})
export class ModelModule {
}
