import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest, fromEvent, interval, map, merge, mergeMap, Observable, of,
  Subject, take, tap, toArray } from 'rxjs';
import { IMessage } from './models/interfaces/message.interface';
import { MessageService } from './services/message.service';
import { ThemeService } from './services/theme.service';
import { select, Store } from '@ngrx/store';
import { loadConversationsAction } from './store/actions/load-conversations.action';
import { getConversations, isLoggedInSelector } from './store/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
/** Component for all task */
export class AppComponent {
  //change boolean variable to see work
  public isUserLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public onlineStatus$: Observable<boolean> = this.getOnlineStatus();

  public numberList$: Observable<number[]> = this.getNumberList();

  public messages$!: Observable<IMessage[]>;

  public isConversationsLoading$ = this.store.pipe(select(isLoggedInSelector))
  public conversations$ = this.store.pipe(select(getConversations))

  private myNumber$ = new Subject<number>();

  constructor(private messageService: MessageService,
    private themeService: ThemeService,
    private store: Store) {
  }

  ngOnInit() {
    this.isUserLoggedIn$.subscribe(isLoggedIn => {
      if (isLoggedIn) {
        console.log('User is online and logged in');
      }
    });

    this.longPolling().subscribe(data => {
      console.log('Received data:', data);
    })

    interval(500).pipe(take(10), map(() => this.getRandomNumber())).subscribe(this.myNumber$);

    this.store.dispatch(loadConversationsAction());
  }

  private longPolling(): Observable<any> {
    return combineLatest(this.isUserLoggedIn$, this.onlineStatus$).pipe(
      mergeMap(([isLoggedIn, isOnline]) => {
        if (isLoggedIn && isOnline) {
          return interval(3000).pipe(
            mergeMap(() => this.poll())
          )
        } else {
          return of();
        }
      })
    )
  }

  private poll(): Observable<string> {
    return of('some poll data!');
    //or some httpClient request
  }

  private getOnlineStatus(): Observable<boolean> {
    return merge(
      of(navigator.onLine),
      fromEvent(window, 'online').pipe(map(() => true)),
      fromEvent(window, 'offline').pipe(map(() => false))
    );
  }

  private getNumber(): Observable<number> {
    return this.myNumber$.asObservable();
  }

  private getNumberList(): Observable<number[]> {
    return interval(2000).pipe(
      take(1),
      mergeMap(() => this.getNumber()),
      toArray(),
    )
  }

  private getRandomNumber(): number {
    return Math.floor(Math.random() * 10);
  }

  public onInputChange(event: any): void {
    const keyword = event.target.value;
    this.messages$ = this.messageService.searchMessages(keyword);
  }

  public chengeAppTheme(): void {
    this.themeService.setAppGlobalTheme();
  }
}
