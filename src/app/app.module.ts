import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatNavbarComponent } from './layout/chat-navbar/chat-navbar.component';
import { ChatPageComponent } from './layout/chat-page/chat-page.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatThreadsComponent } from './layout/chat-threads/chat-threads.component';
import { SingleChatThreadComponent } from './layout/single-chat-thread/single-chat-thread.component';
import { ChatWindowComponent } from './layout/chat-window/chat-window.component';
import { ChatMessageComponent } from './layout/chat-message/chat-message.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatNavbarComponent,
    ChatPageComponent,
    ChatThreadsComponent,
    SingleChatThreadComponent,
    ChatWindowComponent,
    ChatMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule ,
    AppRoutingModule,
    
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
