import {Component, Renderer2} from '@angular/core';

@Component({
  selector: 't4e-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  drawerOpened: boolean;

  constructor(
    private renderer: Renderer2
  ) { }

  toggleDrawer() {
    this.drawerOpened = !this.drawerOpened;
    this.renderer.removeClass(document.body, 't4e-scroll-lock');

    if (this.drawerOpened) {
      this.renderer.addClass(document.body, 't4e-scroll-lock');
    }
  }

  navigateOut() {
    this.drawerOpened = false;
    this.renderer.removeClass(document.body, 't4e-scroll-lock');
  }

}
