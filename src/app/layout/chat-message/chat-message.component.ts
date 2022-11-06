import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/core/models/message.model';
import { User } from 'src/app/core/models/user.model';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {
  
  @Input() message!: Message;
  currentUser!: User;
  incoming!: boolean;

  constructor(public UsersService: UsersService) { }

  ngOnInit(): void {
    this.UsersService.currentUser
    .subscribe(
      (user: User) => {
        this.currentUser = user;
        if (this.message.author && user) {
          this.incoming = this.message.author.id !== user.id;
        }
      });
  }

}
