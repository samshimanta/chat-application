import { TestBed } from '@angular/core/testing';
import { Message } from '../models/message.model';
import { Thread } from '../models/thread.model';
import { User } from '../models/user.model';

import { MessagesService } from './messages.service';

describe('MessagesService', () => {
  let service: MessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//---------------------------
//------ ngBook test 

// describe( 'MessagesService', () => {
//   it('should test', ()=>{
//     const user:User = new User('Nate', '');
//     const thread: Thread = new Thread('t1','Nate','');
//     const m1: Message = new Message({
//       author: user,
//       text: 'Hi There!!',
//       thread: Thread
//     })
//     const m2: Message = new Message({
//       author: user,
//       text: 'Bye!',
//       thread: Thread
//     })


//     const messagesService: MessagesService = new MessagesService();
//     messagesService.newMessages
//       .subscribe((message: Message)=>{
//         console.log('new Messages' + message.text);
//       })

//     messagesService.messages
//       .subscribe((messages: Message[])=>{
//         console.log('Messages' + messages.length)
//       })


//     messagesService.addMessage(m1);
//     messagesService.addMessage(m2);
//   })
// })

// console.log('Hi')