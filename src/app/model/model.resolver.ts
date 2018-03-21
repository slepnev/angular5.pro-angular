import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MessageService } from '../messages/message.service';
import { Message } from '../messages/message.model';
import { RepositoryService } from './repository.service';
import { RestDataService } from './rest-data.service';

@Injectable()
export class ModelResolver implements Resolve<any> {
  constructor(private model: RepositoryService,
              private dataSource: RestDataService,
              private messages: MessageService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.model.getProducts().length === 0) {
      this.messages.reportMessage(new Message('Loading data...'));
      return this.dataSource.getData();
    }
  }
}
