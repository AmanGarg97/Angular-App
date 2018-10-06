import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

export class SidebarComponent implements OnInit {

  currentUrl: string;

  constructor(private router: Router) {
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url);
  }

  ngOnInit() {}

}