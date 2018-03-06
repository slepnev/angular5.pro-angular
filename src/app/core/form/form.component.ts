import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product.model';
import { MODES, SharedState } from '../shared-state.model';
import { NgForm } from '@angular/forms';
import { RepositoryService } from '../../model/repository.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  product: Product = new Product();

  constructor(private model: RepositoryService,
              private state: SharedState) {
  }

  get editing(): boolean {
    return this.state.mode === MODES.EDIT;
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
