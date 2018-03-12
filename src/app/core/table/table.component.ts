import { Component, Inject, OnInit } from '@angular/core';
import { MODES, SHARED_STATE, StateService } from '../state.service';
import { Product } from '../../model/product.model';
import { RepositoryService } from '../../model/repository.service';
import { Observer } from 'rxjs/Observer';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  constructor(private model: RepositoryService, @Inject(SHARED_STATE) private observer: Observer<StateService>) {
  }

  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  deleteProduct(key: number) {
    this.model.deleteProduct(key);
  }

  editProduct(key: number) {
    this.observer.next(new StateService(MODES.EDIT, key));
  }

  createProduct() {
    this.observer.next(new StateService(MODES.CREATE));
  }

}