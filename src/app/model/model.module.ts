import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticDataService } from './static-data.service';
import { RepositoryService } from './repository.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [StaticDataService, RepositoryService]
})
export class ModelModule { }
