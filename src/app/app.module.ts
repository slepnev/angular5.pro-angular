import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MessageModule } from './messages/message.module';
import { AppRoutingModule } from './app-routing.module';
import { ModelModule } from './model/model.module';


@NgModule({
  imports: [BrowserModule, CoreModule, MessageModule, AppRoutingModule, ModelModule],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
