import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'PurchaseManagement';
  clickStatus!: string;

  ngOnInit(): void {
    var nav_icon  = document.querySelectorAll('.nav_icon_cont');
    console.log(nav_icon);
  }

}
