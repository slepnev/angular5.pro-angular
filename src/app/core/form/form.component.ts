import { Component, DoCheck, OnInit } from '@angular/core';
import { Product } from '../../model/product.model';
import { MODES, StateService } from '../state.service';
import { NgForm } from '@angular/forms';
import { RepositoryService } from '../../model/repository.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements DoCheck {

  product: Product = new Product();
  lastId: number;

  constructor(private model: RepositoryService,
              private state: StateService) {
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

  ngDoCheck() {
    if (this.lastId !== this.state.id) {
      this.product = new Product();
      if (this.state.mode === MODES.EDIT) {
        Object.assign(this.product, this.model.getProduct(this.state.id));
      }
      this.lastId = this.state.id;
    }
  }

}
