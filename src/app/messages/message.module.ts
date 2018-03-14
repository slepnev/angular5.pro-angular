import { ErrorHandler, NgModule } from '@angular/core';
import { MessageComponent } from './message.component';
import { MessageService } from './message.service';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorService } from './error.service';

@NgModule({
  imports: [BrowserModule],
  declarations: [MessageComponent],
  exports: [MessageComponent],
  providers: [MessageService, {provide: ErrorHandler, useClass: ErrorService}]
})
export class MessageModule {
}
