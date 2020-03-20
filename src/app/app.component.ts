import { Component } from '@angular/core';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  javaClass = '';
  tsClass = '';

  constructor(private appService: AppService) {
  }

  transpile(): void {
    this.tsClass = this.appService.transpile(this.javaClass);
  }
}
