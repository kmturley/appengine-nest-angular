import { Component, OnInit } from '@angular/core';

import { ApiService } from './shared/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items: Array<any>;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    console.log('AppComponent', this);
    this.api.get('items').subscribe((data: Array<any>) => {
      console.log('data', data);
      this.items = data;
    });
  }

}
