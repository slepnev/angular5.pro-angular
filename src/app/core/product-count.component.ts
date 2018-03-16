import { ChangeDetectorRef, Component, DoCheck, KeyValueDiffer, KeyValueDiffers, OnInit } from '@angular/core';
import { RepositoryService } from '../model/repository.service';

@Component({
  selector: 'app-product-count',
  template: `
    <div class="bg-info p-a-1">There are {{count}} products</div>`
})
export class ProductCountComponent implements OnInit, DoCheck {
  private differ: KeyValueDiffer;
  count = 0;

  constructor(private model: RepositoryService,
              private keyValueDiffers: KeyValueDiffers,
              private changeDetector: ChangeDetectorRef) {
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
    this.count = this.model.getProducts().length;
  }
}
