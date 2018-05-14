import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Message } from './messages/message.model';
import { Subject } from 'rxjs/Subject';
import { FormComponent } from './core/form/form.component';
import { MessageService } from './messages/message.service';

@Injectable()
export class UnsavedGuard implements CanActivate {
  constructor(private messages: MessageService,
              private router: Router) {
  }

  canActivate(): boolean {
    // if (component.editing) {
    //   if (['name', 'category', 'price'].some(prop => component.product[prop] != component.originalProduct[prop])) {
    //     let subject = new Subject<boolean>();
    //     let responses: [[string, (string) => void]] = [
    //       ['Yes', () => {
    //         subject.next(true);
    //         subject.complete();
    //       }],
    //       ['No', () => {
    //         this.router.navigateByUrl(this.router.url);
    //         subject.next(false);
    //         subject.complete();
    //       }]
    //     ];
    //     this.messages.reportMessage(new Message('Discard Changes?', true, responses));
    //     return subject;
    //   }
    // }
    return true;
  }
}
