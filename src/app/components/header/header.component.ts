import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, RouterLinkActive, RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit{
  homeActive: boolean = false;
  servicesActive: boolean = false;
  aboutActive: boolean = false;
  registerActive: boolean = false;
  appoinmentActive: boolean = false;

  onNavActive(handleActive?: string) {
    if (handleActive === 'home') {
      this.homeActive = true;
      this.servicesActive = false;
      this.aboutActive = false;
      this.registerActive = false;
      this.appoinmentActive = false;
    } else if (handleActive === 'services') {
      this.homeActive = false;
      this.servicesActive = true;
      this.aboutActive = false;
      this.registerActive = false;
      this.appoinmentActive = false;
    } else if (handleActive === 'about') {
      this.homeActive = false;
      this.servicesActive = false;
      this.aboutActive = true;
      this.registerActive = false;
      this.appoinmentActive = false;
    } else if (handleActive === 'register') {
      this.homeActive = false;
      this.servicesActive = false;
      this.aboutActive = false;
      this.registerActive = true;
      this.appoinmentActive = false;
    } else if (handleActive === 'appoinment') {
      this.homeActive = false;
      this.servicesActive = false;
      this.aboutActive = false;
      this.registerActive = false;
      this.appoinmentActive = true;
    } else {
      this.homeActive = false;
      this.servicesActive = false;
      this.aboutActive = false;
      this.registerActive = false;
      this.appoinmentActive = false;
      
    }
    localStorage.setItem('activeSection', handleActive!);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
     const activeSection = localStorage.getItem('activeSection');

     this.onNavActive(activeSection || 'home');
  }

}
