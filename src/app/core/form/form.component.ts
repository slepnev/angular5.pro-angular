import { AfterContentInit, Component, Inject } from '@angular/core';
import { Product } from '../../model/product.model';
import { SHARED_STATE, StateService } from '../state.service';
import { NgForm } from '@angular/forms';
import { RepositoryService } from '../../model/repository.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements AfterContentInit {

  product: Product = new Product();
  originalProduct = new Product();
  editing = false;

  constructor(private model: RepositoryService, public activatedRoute: ActivatedRoute,
              public router: Router) {
    activatedRoute.params.subscribe(params => {
      this.editing = params['mode'] === 'edit';
      const id = params['id'];
      if (id != null) {
        Object.assign(this.product, model.getProduct(id) || new Product());
        Object.assign(this.originalProduct, this.product);
      }
    });
  }

  ngAfterContentInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    if (id !== undefined) {
      Object.assign(this.product, this.model.getProduct(<number>id));
      this.editing = true;
    }
  }

  submitForm(form: NgForm) {
    if (form.valid) {
      this.model.saveProduct(this.product);
      this.originalProduct = this.product;
      this.router.navigateByUrl('/');
    }
  }

  // resetForm() {
  //   this.product = new Product();
  // }

}
