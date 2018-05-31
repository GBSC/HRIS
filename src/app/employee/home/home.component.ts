import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tabItem : string;

  constructor() { }

  ngOnInit() {

    this.setTabItem('Activity');
  }

  setTabItem(item : string)
  {
    this.tabItem = item;
  }

}
