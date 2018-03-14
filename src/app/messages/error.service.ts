import { Injectable } from '@angular/core';
import { Message } from './message.model';
import { MessageService } from './message.service';

@Injectable()
export class ErrorService {

  constructor(private messageService: MessageService) {
  }

  handleError(error) {
    const msg = error instanceof Error ? error.message : error.toString();
    this.messageService
      .reportMessage(new Message(msg, true));
  }

}
