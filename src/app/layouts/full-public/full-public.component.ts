import { Component, OnInit, HostListener,Inject  } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { Router } from '@angular/router';
/* import { SEOService } from '../../services/seo/seo.service'; */

declare var $: any;

@Component({
  selector: 'app-full-public-layout',
  templateUrl: './full-public.component.html',
  styleUrls: ['./full-public.component.scss']
})
export class FullPublicComponent implements OnInit {
  tabStatus = 'justified';

  public isCollapsed = false;

  public innerWidth: any;
  public defaultSidebar: any;
  public showSettings = false;
  public showMobileMenu = false;

  options = {
    theme: 'light', // two possible values: light, dark
    dir: 'ltr', // two possible values: ltr, rtl
    layout: 'vertical', // fixed value. shouldn't be changed.
    sidebartype: 'full', // four possible values: full, iconbar, overlay, mini-sidebar
    sidebarpos: 'fixed', // two possible values: fixed, absolute
    headerpos: 'fixed', // two possible values: fixed, absolute
    boxed: 'full', // two possible values: full, boxed
    navbarbg: 'skin6', // six possible values: skin(1/2/3/4/5/6)
    sidebarbg: 'skin5', // six possible values: skin(1/2/3/4/5/6)
    logobg: 'skin5' // six possible values: skin(1/2/3/4/5/6)
  };

  constructor(public router: Router ,@Inject(DOCUMENT) private document: Document) {

  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let p : HTMLDivElement | null = this.document.querySelector('.navbar-register');

    if(p){
      if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        p.classList.add('fixed-shadow');
      }else{
        p.classList.remove('fixed-shadow');
      }
    }
  }

  ngOnInit() {
    if (this.router.url === '/') {
      this.router.navigate(['/']);
    }
    this.defaultSidebar = this.options.sidebartype;
    this.handleSidebar();
  }

  @HostListener('window:resize', ['$event'])
  onResize( event : any ) {
    this.handleSidebar();
  }

  handleSidebar() {
    this.innerWidth = window.innerWidth;
    switch (this.defaultSidebar) {
      case 'full':
      case 'iconbar':
        if (this.innerWidth < 1170) {
          this.options.sidebartype = 'mini-sidebar';
        } else {
          this.options.sidebartype = this.defaultSidebar;
        }
        break;

      case 'overlay':
        if (this.innerWidth < 767) {
          this.options.sidebartype = 'mini-sidebar';
        } else {
          this.options.sidebartype = this.defaultSidebar;
        }
        break;

      default:
    }
  }

  toggleSidebarType() {
    switch (this.options.sidebartype) {
      case 'full':
      case 'iconbar':
        this.options.sidebartype = 'mini-sidebar';
        break;

      case 'overlay':
        this.showMobileMenu = !this.showMobileMenu;
        break;

      case 'mini-sidebar':
        if (this.defaultSidebar === 'mini-sidebar') {
          this.options.sidebartype = 'full';
        } else {
          this.options.sidebartype = this.defaultSidebar;
        }
        break;

      default:
    }
  }
}
