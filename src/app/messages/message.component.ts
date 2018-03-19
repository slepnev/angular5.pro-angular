import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';
import { Message } from './message.model';
import { NavigationCancel, NavigationEnd, Router } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  lastMessage: Message;

  constructor(public messageService: MessageService, public router: Router) {
    this.messageService.messages.subscribe(m => {
      this.lastMessage = m;
    });
    router.events
      .filter(e => e instanceof NavigationEnd || e instanceof NavigationCancel)
      .subscribe(e => {
        this.lastMessage = null;
      });
  }

  ngOnInit() {
  }

}
