import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  /** Array of navigation options */
  navOpts: any[] = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Schedule', path: '/schedule' },
  ]

  constructor() { }

  ngOnInit() {
  }

}
