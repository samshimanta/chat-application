import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter, map, publishReplay, refCount, scan } from 'rxjs/operators';
import { Message } from '../models/message.model';
import { Thread } from '../models/thread.model';
import { User } from '../models/user.model';


const initialMessages: Message[] = [];

interface IMessageOperation extends Function {
  (messages: Message[]): Message[];
}

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  // a stream that publishes new messages only once
  newMessages: Subject<Message> = new Subject<Message>();

  // `messages` is a stream that emits an array of the most up to date messages
  messages: Observable<Message[]>;

  // `updates` receives _operations_ to be applied to our `messages`
  // it's a way we can perform changes on *all* messages (that are currently
  // stored in `messages`)
  updates: Subject<any> = new Subject<any>();


  //------- action Streams
  create: Subject<Message> = new Subject<Message>();
  markThreadAsRead: Subject<any> = new Subject<any>(); 

  constructor() {
    this.messages = this.updates.pipe(
      // watch the updates and accumulate operations on the messages
    scan(
      (messages: Message[],
      operation: IMessageOperation) => {
        return operation(messages);
      },
      initialMessages
    ),
      // make sure we can share the most recent list of messages across anyone
      // who's interested in subscribing and cache the last known list of
      // messages
      publishReplay(1),
      refCount())
    
   
    // `create` takes a Message and then puts an operation (the inner function)
    // on the `updates` stream to add the Message to the list of messages.
    //
    // That is, for each item that gets added to `create` (by using `next`)
    // this stream emits a concat operation function.
    //
    // Next we subscribe `this.updates` to listen to this stream, which means
    // that it will receive each operation that is created
    //
    // Note that it would be perfectly acceptable to simply modify the
    // "addMessage" function below to simply add the inner operation function to
    // the update stream directly and get rid of this extra action stream
    // entirely. The pros are that it is potentially clearer. The cons are that
    // the stream is no longer composable.
    this.create.pipe(
      map(function(message: Message): IMessageOperation {
      return (messages: Message[]) => {
        return messages.concat(message);
      };
    }))
      // .map( function(message: Message): IMessageOperation {
      //   return (messages: Message[]) => {
      //     return messages.concat(message);
      //   };
      // })
      .subscribe(this.updates);

    this.newMessages
      .subscribe(this.create);

    // similarly, `markThreadAsRead` takes a Thread and then puts an operation
    // on the `updates` stream to mark the Messages as read
    this.markThreadAsRead.pipe(map( (thread: Thread) => {
      return (messages: Message[]) => {
        return messages.map( (message: Message) => {
          // note that we're manipulating `message` directly here. Mutability
          // can be confusing and there are lots of reasons why you might want
          // to, say, copy the Message object or some other 'immutable' here
          if (message.thread.id === thread.id) {
            message.isRead = true;
          }
          return message;
        });
      };
    }))
      // .map( (thread: Thread) => {
      //   return (messages: Message[]) => {
      //     return messages.map( (message: Message) => {
      //       // note that we're manipulating `message` directly here. Mutability
      //       // can be confusing and there are lots of reasons why you might want
      //       // to, say, copy the Message object or some other 'immutable' here
      //       if (message.thread.id === thread.id) {
      //         message.isRead = true;
      //       }
      //       return message;
      //     });
      //   };
      // })
      .subscribe(this.updates);

  }

  // an imperative function call to this action stream
  addMessage(message: Message): void {
    this.newMessages.next(message);
  }

  messagesForThreadUser(thread: Thread, user: User): Observable<Message> {
    return this.newMessages.pipe(filter((message: Message) => {
      // belongs to this thread
    return (message.thread.id === thread.id) &&
          // and isn't authored by this user
          (message.author.id !== user.id);
    }))
      // .filter((message: Message) => {
      //          // belongs to this thread
      //   return (message.thread.id === thread.id) &&
      //          // and isn't authored by this user
      //          (message.author.id !== user.id);
      // });
  }
}

export const messageServiceInjectables: Array<any> = [
  MessagesService
]
