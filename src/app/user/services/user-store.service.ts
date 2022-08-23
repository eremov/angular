import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Course} from "../../services/course";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  private name$$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public name$: Observable<string> = this.name$$.asObservable();

  private isAdmin$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isAdmin$: Observable<boolean> = this.isAdmin$$.asObservable();

  constructor(private userService: UserService) {
  }

  getUser() {
    this.userService.getUser().subscribe(user => {
      this.name$$.next(user.name);
      this.isAdmin$$.next(user.role === 'admin');
    })
  }
}
