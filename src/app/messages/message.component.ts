import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';
import { Message } from './message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  lastMessage: Message;

  constructor(public messageService: MessageService) {
    this.messageService.messages.subscribe(m => {
      this.lastMessage = m;
    });
  }

  ngOnInit() {
  }

}
