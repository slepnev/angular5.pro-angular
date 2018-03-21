import { Component } from '@angular/core';
import { Product } from '../../model/product.model';
import { RepositoryService } from '../../model/repository.service';
import { Router } from '@angular/router';
import { HighlightTrigger } from '../table.animations';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  animations: [HighlightTrigger],
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  public category: any = null;
  public highlightCategory = '';

  constructor(private model: RepositoryService,
              public router: Router) {
  }

  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }

  getProducts(): any[] {
    return this.model.getProducts()
      .filter(p => this.category == null || p.category === this.category);
  }

  get categories(): string[] {
    return this.model.getProducts()
      .map(p => p.category)
      .filter((category, index, array) => array.indexOf(category) === index);
  }

  deleteProduct(key: number) {
    this.model.deleteProduct(key);
  }

  editProduct(key: number) {
    this.router.navigate(['form', 'edit', key]);
  }

  createProduct() {
    this.router.navigate(['form', 'create']);
  }

  getRowState(category: string): string {
    return this.highlightCategory == '' ? '' :
      this.highlightCategory == category ? 'selected' : 'notselected';
  }

}
