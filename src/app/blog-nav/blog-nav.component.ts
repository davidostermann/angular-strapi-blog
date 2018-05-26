import { Component, Input } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog-nav',
  templateUrl: './blog-nav.component.html',
  styleUrls: ['./blog-nav.component.css']
})
export class BlogNavComponent {
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.Handset
  );
  @Input() title: String;
  constructor(private breakpointObserver: BreakpointObserver) {}
}
