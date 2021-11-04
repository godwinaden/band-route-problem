import {Component} from '@angular/core';
import {ChangeThemeService, globals} from "./globals";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  styleTheme:number = globals.styleTheme;

  constructor(changeThemeService: ChangeThemeService){
    changeThemeService.theme$.subscribe(
      theme => this.styleTheme = theme,
    )
  }
}
