import { NgModule } from '@angular/core';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { ModelModule } from '../model/model.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MODES, SHARED_STATE, StateService } from './state.service';
import { Subject } from 'rxjs/Subject';
import { StatePipe } from './state.pipe';
import { MessageModule } from '../messages/message.module';
import { MessageService } from '../messages/message.service';
import { Message } from '../messages/message.model';
import { RepositoryService } from '../model/repository.service';

@NgModule({
  imports: [BrowserModule, FormsModule, ModelModule, MessageModule],
  declarations: [TableComponent, FormComponent, StatePipe],
  exports: [ModelModule, TableComponent, FormComponent, StatePipe],
  providers: [{
    provide: SHARED_STATE,
    deps: [MessageService, RepositoryService],
    useFactory: (messageService, model) => {
      const subject = new Subject<StateService>();
      subject.subscribe(m => messageService.reportMessage(
        new Message(MODES[m.mode] + (m.id !== undefined ? ` ${model.getProduct(m.id).name}` : ''))
      ));
      return subject;
    }
  }]
})
export class CoreModule { }
