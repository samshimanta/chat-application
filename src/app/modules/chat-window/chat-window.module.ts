import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatWindowRoutingModule } from './chat-window-routing.module';
import { ChatWindowComponent } from './chat-window.component';


@NgModule({
  declarations: [
    ChatWindowComponent
  ],
  imports: [
    CommonModule,
    ChatWindowRoutingModule
  ]
})
export class ChatWindowModule { }
