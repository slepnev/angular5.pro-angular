import { ChangeDetectorRef, Component, DoCheck, KeyValueDiffer, KeyValueDiffers, OnInit } from '@angular/core';
import { RepositoryService } from '../model/repository.service';

@Component({
  selector: 'app-category-count',
  template: `
    <div class="bg-primary p-a-1">There are {{count}} categories</div>`
})
export class CategoryCountComponent implements OnInit, DoCheck {
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
    //   this.count = this.model.getProducts()
    //     .map(p => p.category)
    //     .filter((category, index, array) => array.indexOf(category) === index).length;
    // }
  }
}
