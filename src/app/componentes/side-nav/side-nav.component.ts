import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [MatSidenavModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
  shouldRun: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.shouldRun = false; // Default value
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
    }
  }}
