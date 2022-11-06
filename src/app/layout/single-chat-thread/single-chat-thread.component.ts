import { Component, Input, OnInit } from '@angular/core';
import { Thread } from 'src/app/core/models/thread.model';
import { ThreadsService } from 'src/app/core/services/threads.service';

@Component({
  selector: 'app-single-chat-thread',
  templateUrl: './single-chat-thread.component.html',
  styleUrls: ['./single-chat-thread.component.scss']
})
export class SingleChatThreadComponent implements OnInit {
  statusClass= '';



  @Input() thread!: Thread;
  selected = false;

  constructor(
    public threadsService: ThreadsService
  ) { }

  ngOnInit(): void {
    this.threadsService.currentThread
      .subscribe( (currentThread: Thread) => {
        this.selected = currentThread && 
          this.thread &&
          (currentThread.id === this.thread.id);
      } )
  }

  clicked(event:any):void{
    this.threadsService.setCurrentThread(this.thread);
    event.preventDefault();
    this.statusClass = 'active';
  }

}
