import { Component, Inject } from '@angular/core';
import { Product } from '../../model/product.model';
import { MODES, SHARED_STATE, StateService } from '../state.service';
import { NgForm } from '@angular/forms';
import { RepositoryService } from '../../model/repository.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  product: Product = new Product();
  editing = false;

  constructor(private model: RepositoryService,
              @Inject(SHARED_STATE) public stateEvents: Observable<StateService>) {
    stateEvents
      .subscribe(update => {
        this.product = new Product();
        if (update.id !== undefined) {
          Object.assign(this.product, this.model.getProduct(update.id));
        }
        this.editing = update.mode === MODES.EDIT;
      });
  }

  submitForm(form: NgForm) {
    if (form.valid) {
      this.model.saveProduct(this.product);
      this.product = new Product();
      form.reset();
    }
  }

  resetForm() {
    this.product = new Product();
  }

}
