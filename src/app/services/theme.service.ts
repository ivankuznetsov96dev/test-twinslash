import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { THEMES } from '../models/constants/themes.enum';
@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private appGlobalTheme: BehaviorSubject<THEMES> = new BehaviorSubject<THEMES>(THEMES.light);
  public appGlobalTheme$ = this.appGlobalTheme.asObservable();

  constructor(){
    this.initDataTheme();
  }

  public setAppGlobalTheme(): void {
    const newTheme = this.appGlobalTheme.getValue() === 'light' ? THEMES.dark : THEMES.light;
    this.appGlobalTheme.next(newTheme);
    this.initDataTheme();
  }

  public initDataTheme(): void {
    document.documentElement.setAttribute('data-theme', this.appGlobalTheme.getValue());
  }
}
