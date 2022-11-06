import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  //currentUser: Subject<User>=  new BehaviorSubject<User>(null);
  currentUser: Subject<User>=  new ReplaySubject<User>();
  //currentUser!: BehaviorSubject<User>;
  
  public setCurrentUser(newUser: User): void {
    this.currentUser.next(newUser );
  }

}

export const userServiceInjectables: Array<any> = [
  UsersService
]
