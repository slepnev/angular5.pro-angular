import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { RestDataService } from './rest-data.service';

@Injectable()
export class RepositoryService {

  private products: Product[];
  private locator = (p: Product, id: number) => p.id === Number(id);

  constructor(private dataSource: RestDataService, private http: HttpClient) {
    this.products = [];
    this.dataSource.getData().subscribe(
      (response) => {
        this.products = response;
      }
    );
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find(p => this.locator(p, id));
  }

  getNextProductId(id: number): number {
    const index = this.products.findIndex(p => this.locator(p, id));
    if (index > -1) {
      return this.products[this.products.length > index + 2
        ? index + 1 : 0].id;
    } else {
      return id || 0;
    }
  }

  getPreviousProductid(id: number): number {
    const index = this.products.findIndex(p => this.locator(p, id));
    if (index > -1) {
      return this.products[index > 0
        ? index - 1 : this.products.length - 1].id;
    } else {
      return id || 0;
    }
  }

  saveProduct(product: Product) {
    if (product.id === 0 || product.id == null) {
      this.dataSource.saveProduct(product)
        .subscribe(p => this.products.push(p));
    } else {
      this.dataSource.updateProduct(product).subscribe(p => {
        const index = this.products
          .findIndex(item => this.locator(item, p.id));
        this.products.splice(index, 1, p);
      });
    }
  }

  deleteProduct(id: number) {
    this.dataSource.deleteProduct(id).subscribe(() => {
      const index = this.products.findIndex(p => this.locator(p, id));
      if (index > -1) {
        this.products.splice(index, 1);
      }
    });
  }

  private generateID(): number {
    let candidate = 100;
    while (this.getProduct(candidate) != null) {
      candidate++;
    }
    return candidate;
  }

}
