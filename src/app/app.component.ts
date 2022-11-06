import { Component } from '@angular/core';
import { ChatExampleData } from './core/data/chat-example-data';
import { MessagesService } from './core/services/messages.service';
import { ThreadsService } from './core/services/threads.service';
import { UsersService } from './core/services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chat-bot-app';

  constructor(
    public messgesService: MessagesService,
    public threadsService: ThreadsService,
    public usersService: UsersService
  ){
    ChatExampleData.init(messgesService,threadsService,usersService);
  }
}
