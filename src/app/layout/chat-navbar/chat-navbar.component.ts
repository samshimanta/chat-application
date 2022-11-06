import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { combineLatest, combineLatestWith } from 'rxjs/operators';
import { Message } from 'src/app/core/models/message.model';
import { Thread } from 'src/app/core/models/thread.model';
import { MessagesService } from 'src/app/core/services/messages.service';
import { ThreadsService } from 'src/app/core/services/threads.service';

@Component({
  selector: 'app-chat-navbar',
  templateUrl: './chat-navbar.component.html',
  styleUrls: ['./chat-navbar.component.scss']
})
export class ChatNavbarComponent implements OnInit {

  // navItems = [
    
  //   { link: '/home', title: 'Home' },
  //   { link: '/about', title: 'About' },
  //   { link: '/contact', title: 'Messages' }
  // ];

  unreadMessagesCount!: number;

  constructor(
    public messagesService: MessagesService,
    public threadsService: ThreadsService
  ) { }

  ngOnInit(): void {
  //   this.messagesService.messages.pipe(
  //     combineLatestWith(
  //       this.threadsService.currentThread,
  //       (messages: Message[], currentThread: Thread) =>
  //       { [currentThread, messages]} )
  //   )
      

  //         .subscribe(([currentThread, messages]: [Thread, Message[]]) => {
  //           this.unreadMessagesCount =
  //             _.reduce(
  //               messages,
  //               (sum: number, m: Message) => {
  //                 const messageIsInCurrentThread: boolean = m.thread &&
  //                   currentThread &&
  //                   (currentThread.id === m.thread.id);
  //                 // note: in a "real" app you should also exclude
  //                 // messages that were authored by the current user b/c they've
  //                 // already been "read"
  //                 if (m && !m.isRead && !messageIsInCurrentThread) {
  //                   sum = sum + 1;
  //                 }
  //                 return sum;
  //               },
  //               0);
  //         });
   }

  

}
