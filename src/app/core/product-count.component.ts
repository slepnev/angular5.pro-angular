import { ChangeDetectorRef, Component, DoCheck, KeyValueDiffers, OnInit } from '@angular/core';
import { RepositoryService } from '../model/repository.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-count',
  template: `
    <div class="bg-info p-a-1">There are {{count}} products</div>`
})
export class ProductCountComponent implements OnInit, DoCheck {
  count = 0;
  private category: string;

  constructor(private model: RepositoryService,
              private keyValueDiffers: KeyValueDiffers,
              private changeDetector: ChangeDetectorRef, activeRoute: ActivatedRoute) {
    activeRoute.pathFromRoot.forEach(route => route.params.subscribe(params => {
      if (params['category'] != null) {
        this.category = params['category'];
        this.updateCount();
      }
    }));
  }

  ngOnInit() {
    // this.differ = this.keyValueDiffers
    //   .find(this.model.getProducts())
    //   .create(this.changeDetector);
  }

  ngDoCheck() {
    // if (this.differ.diff(this.model.getProducts()) != null) {
    //   this.updateCount();
    // }
  }

  private updateCount() {
    this.count = this.model.getProducts()
      .filter(p => this.category == null || p.category === this.category)
      .length;
  }
}
