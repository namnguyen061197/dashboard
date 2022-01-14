import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';
  modeFullView:boolean = false;
  toggleExtend(){
    this.modeFullView = !this.modeFullView;
  }
}
