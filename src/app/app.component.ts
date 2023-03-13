import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ToDOApp';
  url: string;

  constructor(private location: Location) {
    location.onUrlChange((url) => {
      this.url = url;
    });
  }
}
